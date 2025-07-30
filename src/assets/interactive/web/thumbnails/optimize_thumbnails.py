#!/usr/bin/env python3
"""
Web thumbnail optimization script for web experiences.
Optimizes thumbnail images for web use while maintaining high quality.
Resizes images so the longest side is 512px or less.
Converts to WebP format for optimal web performance.
"""

import os
import sys
import shutil
from PIL import Image, ImageOps
import glob
from pathlib import Path

def optimize_thumbnail(input_path, output_path, max_size=512, quality=85):
    """
    Optimize a thumbnail image for web use.
    
    Args:
        input_path: Path to original image
        output_path: Path for optimized image
        max_size: Maximum dimension for longest side
        quality: WebP quality (0-100)
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

def create_slug_filename(original_name):
    """Convert original filename to web-friendly slug format."""
    # Remove extension
    name_without_ext = os.path.splitext(original_name)[0]
    
    # Convert to lowercase and replace spaces/underscores with hyphens
    slug = name_without_ext.lower()
    slug = slug.replace(' ', '-').replace('_', '-')
    
    # Remove any characters that aren't alphanumeric or hyphens
    slug = ''.join(char for char in slug if char.isalnum() or char == '-')
    
    # Remove multiple consecutive hyphens
    while '--' in slug:
        slug = slug.replace('--', '-')
    
    # Remove leading/trailing hyphens
    slug = slug.strip('-')
    
    return f"{slug}.webp"

def main():
    """Main function to process all thumbnail images."""
    script_dir = Path(__file__).parent
    originals_dir = script_dir / "originals"
    
    # Create originals directory
    originals_dir.mkdir(exist_ok=True)
    
    print("=== Web Thumbnail Optimization Script ===")
    print("Processing thumbnail images for web experiences...")
    print("- Max dimension: 512px")
    print("- Quality: 85%")
    print("- Format: WebP with optimization")
    print("- Originals moved to originals/ folder")
    print()
    
    # Get all image files from current directory
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG', '*.tiff', '*.TIFF']:
        image_files.extend(glob.glob(str(script_dir / ext)))
    
    # Filter out already processed WebP files and the script itself
    image_files = [f for f in image_files if not f.endswith('.webp') and not f.endswith('.py')]
    
    if not image_files:
        print("No images found to optimize.")
        print("Place JPG, PNG, or TIFF files in this directory and run the script again.")
        return
    
    # Sort files for consistent ordering
    image_files.sort()
    
    print(f"Found {len(image_files)} images to optimize:")
    for img_path in image_files:
        print(f"  - {os.path.basename(img_path)}")
    print()
    
    processed_count = 0
    
    for img_path in image_files:
        img_path = Path(img_path)
        original_filename = img_path.name
        
        # Generate output filename with web-friendly slug
        output_filename = create_slug_filename(original_filename)
        output_path = script_dir / output_filename
        
        print(f"Processing {original_filename} -> {output_filename}")
        
        # Optimize the image
        if optimize_thumbnail(img_path, output_path):
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
                print(f"  Moved original to: {original_dest.relative_to(script_dir)}")
                processed_count += 1
            except Exception as e:
                print(f"  ✗ Error moving original file: {e}")
        else:
            print(f"  ✗ Failed to optimize {original_filename}")
        
        print()  # Add spacing between files
    
    print(f"=== Optimization Complete ===")
    print(f"Successfully processed: {processed_count} images")
    print("Thumbnails are optimized and ready for web deployment!")
    print("Original files have been moved to the originals/ folder.")
    
    if processed_count > 0:
        print("\nOptimized thumbnails:")
        webp_files = list(script_dir.glob("*.webp"))
        for webp_file in sorted(webp_files):
            print(f"  - {webp_file.name}")

if __name__ == "__main__":
    main()