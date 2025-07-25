#!/usr/bin/env python3
"""
Photo optimization script for web deployment.
Optimizes photos for web use while maintaining high quality.
Processes new images from import/ folders and moves originals to originals/ folders.
Resizes images so the longest side is 1920px or less.
Renames files according to the naming scheme used in photo-collections.js
"""

import os
import sys
import shutil
from PIL import Image, ImageOps
import glob
from pathlib import Path

def optimize_image(input_path, output_path, max_size=1920, quality=85):
    """
    Optimize an image for web use.
    
    Args:
        input_path: Path to original image
        output_path: Path for optimized image
        max_size: Maximum dimension for longest side
        quality: JPEG quality (0-100)
    """
    try:
        # Open and auto-rotate image based on EXIF
        with Image.open(input_path) as img:
            # Auto-rotate based on EXIF orientation
            img = ImageOps.exif_transpose(img)
            
            # Convert to RGB if necessary (handles RGBA, P, etc.)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background for transparency
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Calculate new dimensions
            width, height = img.size
            if width > max_size or height > max_size:
                if width > height:
                    new_width = max_size
                    new_height = int((height * max_size) / width)
                else:
                    new_height = max_size
                    new_width = int((width * max_size) / height)
                
                # Resize with high-quality resampling
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save with WebP optimization
            img.save(output_path, 'WEBP', quality=quality, optimize=True)
            print(f"✓ Optimized: {os.path.basename(input_path)} -> {os.path.basename(output_path)}")
            return True
            
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return False

def get_output_filename(collection, index, is_hero=False):
    """Generate output filename based on collection and index."""
    if is_hero:
        return f"hero.webp"
    else:
        return f"{collection}-{index:02d}.webp"

def get_next_available_index(collection_dir, collection_name):
    """Find the next available index for new images in a collection."""
    existing_files = list(collection_dir.glob(f"{collection_name}-*.webp"))
    if not existing_files:
        return 1
    
    # Extract indices from existing files
    indices = []
    for file in existing_files:
        try:
            # Extract number from filename like "portrait-01.webp"
            name_part = file.stem.replace(f"{collection_name}-", "")
            indices.append(int(name_part))
        except ValueError:
            continue
    
    return max(indices) + 1 if indices else 1

def process_import_folder(collection_name):
    """Process new images from a collection's import/ folder."""
    collection_dir = Path(collection_name)
    import_dir = collection_dir / "import"
    originals_dir = collection_dir / "originals"
    
    # Create directories if they don't exist
    originals_dir.mkdir(exist_ok=True)
    
    if not import_dir.exists():
        print(f"No import directory found for {collection_name} (create {import_dir} to add new photos)")
        return 0
    
    # Get all image files from import directory
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG', '*.tiff', '*.TIFF']:
        image_files.extend(glob.glob(str(import_dir / ext)))
    
    if not image_files:
        print(f"No new images found in {import_dir}")
        return 0
    
    # Sort files for consistent ordering
    image_files.sort()
    
    print(f"\n--- Processing {collection_name.upper()} collection ---")
    print(f"Found {len(image_files)} new images to import")
    
    processed_count = 0
    next_index = get_next_available_index(collection_dir, collection_name)
    
    for img_path in image_files:
        img_path = Path(img_path)
        original_filename = img_path.name
        
        # Check if this is intended as a hero image
        if original_filename.lower().startswith('hero.'):
            # Process as hero image
            hero_output_path = collection_dir / "hero.webp"
            print(f"  Processing hero image: {original_filename}")
            
            # Also create a numbered gallery version (first image)
            gallery_output_filename = get_output_filename(collection_name, 1)
            gallery_output_path = collection_dir / gallery_output_filename
            
            # Optimize and save both versions
            if optimize_image(img_path, hero_output_path):
                print(f"    Created hero.webp")
                # Also save as first gallery image
                if optimize_image(img_path, gallery_output_path):
                    print(f"    Also created {gallery_output_filename} for gallery")
                
                # Move original to originals folder
                original_dest = originals_dir / original_filename
                
                # Handle filename conflicts
                counter = 1
                while original_dest.exists():
                    name_parts = original_filename.rsplit('.', 1)
                    if len(name_parts) == 2:
                        original_dest = originals_dir / f"{name_parts[0]}_{counter}.{name_parts[1]}"
                    else:
                        original_dest = originals_dir / f"{original_filename}_{counter}"
                    counter += 1
                
                try:
                    shutil.move(str(img_path), str(original_dest))
                    print(f"    Moved original to: {original_dest.relative_to(collection_dir)}")
                    processed_count += 1
                except Exception as e:
                    print(f"    ✗ Error moving original file: {e}")
            else:
                print(f"    ✗ Failed to optimize {original_filename}")
            
            continue  # Skip the normal processing for this file
        
        # Regular numbered image (skip index 1 if hero was processed)
        if next_index == 1:
            # Check if hero.webp exists, if so start from index 2
            hero_path = collection_dir / "hero.webp"
            if hero_path.exists():
                next_index = 2
        
        output_filename = get_output_filename(collection_name, next_index)
        output_path = collection_dir / output_filename
        print(f"  Processing {original_filename} -> {output_filename}")
        next_index += 1
        
        # Optimize the image (for regular numbered images)
        if optimize_image(img_path, output_path):
            # Move original to originals folder
            original_dest = originals_dir / original_filename
            
            # Handle filename conflicts
            counter = 1
            while original_dest.exists():
                name_parts = original_filename.rsplit('.', 1)
                if len(name_parts) == 2:
                    original_dest = originals_dir / f"{name_parts[0]}_{counter}.{name_parts[1]}"
                else:
                    original_dest = originals_dir / f"{original_filename}_{counter}"
                counter += 1
            
            try:
                shutil.move(str(img_path), str(original_dest))
                print(f"    Moved original to: {original_dest.relative_to(collection_dir)}")
                processed_count += 1
            except Exception as e:
                print(f"    ✗ Error moving original file: {e}")
        else:
            print(f"    ✗ Failed to optimize {original_filename}")
    
    # Keep import directory for future use (don't delete even if empty)
    if import_dir.exists():
        print(f"  Import directory ready for future photos: {import_dir.relative_to(collection_dir)}")
    
    return processed_count

def create_import_directories():
    """Create import directories for all collections if they don't exist."""
    collections = ['portrait', 'aberrant', 'performance', 'astro']
    created_dirs = []
    
    for collection in collections:
        collection_dir = Path(collection)
        import_dir = collection_dir / "import"
        
        if collection_dir.exists() and not import_dir.exists():
            import_dir.mkdir(exist_ok=True)
            created_dirs.append(str(import_dir))
    
    if created_dirs:
        print("Created import directories:")
        for dir_path in created_dirs:
            print(f"  {dir_path}")
        print()

def main():
    """Main function to process all collections."""
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    collections = ['portrait', 'aberrant', 'performance', 'astro']
    
    print("=== Photo Import & Optimization Script ===")
    print("Processing new photos from import/ folders...")
    print("- Max dimension: 1920px")
    print("- Quality: 85%")
    print("- Format: WebP with optimization")
    print("- Originals moved to originals/ folder")
    print()
    
    # Create import directories if needed
    create_import_directories()
    
    total_processed = 0
    any_found = False
    
    for collection in collections:
        if os.path.exists(collection):
            processed = process_import_folder(collection)
            total_processed += processed
            if processed > 0:
                any_found = True
        else:
            print(f"Collection directory '{collection}' not found")
    
    print(f"\n=== Import Complete ===")
    if any_found:
        print(f"Total new images processed: {total_processed}")
        print("\nNew photos are optimized and ready for web deployment!")
        print("Original files have been moved to their respective originals/ folders.")
    else:
        print("No new images found in any import/ folders.")
        print("\nTo add new photos:")
        print("1. Place unoptimized images in the appropriate collection's import/ folder")
        print("2. Run this script again")
        print("3. Name files 'hero.jpg' to replace hero image (will also become first gallery image)")
        print("4. Regular images get sequential numbering starting from the next available number")

if __name__ == "__main__":
    main()