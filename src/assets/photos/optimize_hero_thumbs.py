#!/usr/bin/env python3
"""
Photo Collections - Hero Thumbnail Optimizer
Creates 768x768 center-cropped WebP thumbnails for fast hero image loading.

Usage:
    cd src/assets/photos/
    python3 optimize_hero_thumbs.py

This script:
1. Processes existing hero.webp images from each photo collection
2. Creates 768x768 center-cropped square thumbnails
3. Optimizes for fast loading in collection overview cards
4. Maintains high quality for larger displays while reducing file sizes significantly
"""

import os
import sys
from PIL import Image, ImageOps
import json

# Photo collections mapping
COLLECTIONS = {
    'portrait': {
        'input': 'portrait/hero.webp',
        'output': 'hero-thumbs/portrait-hero.webp',
        'name': 'Portrait Collection'
    },
    'aberrant': {
        'input': 'aberrant/hero.webp',
        'output': 'hero-thumbs/aberrant-hero.webp',
        'name': 'Aberrant Collection'
    },
    'performance': {
        'input': 'performance/hero.webp',
        'output': 'hero-thumbs/performance-hero.webp',
        'name': 'Performance Collection'
    },
    'astro': {
        'input': 'astro/hero.webp',
        'output': 'hero-thumbs/astro-hero.webp',
        'name': 'Astro Collection'
    }
}

def center_crop_to_square(image):
    """
    Crop image from center to create a perfect square.
    Maintains aspect ratio by cropping the longer dimension.
    """
    width, height = image.size
    
    if width == height:
        return image
    
    # Determine crop dimensions
    crop_size = min(width, height)
    
    # Calculate crop coordinates (center crop)
    left = (width - crop_size) // 2
    top = (height - crop_size) // 2
    right = left + crop_size
    bottom = top + crop_size
    
    return image.crop((left, top, right, bottom))

def optimize_hero_thumbnail(input_path, output_path, size=768):
    """
    Create optimized hero thumbnail:
    1. Center crop to square
    2. Resize to target size (768x768)
    3. Convert to WebP with high quality optimization
    """
    try:
        # Open and process image
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (handles RGBA, grayscale, etc.)
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Center crop to square
            img_square = center_crop_to_square(img)
            
            # Resize to target size with high quality resampling
            img_resized = img_square.resize((size, size), Image.Resampling.LANCZOS)
            
            # Save as optimized WebP with higher quality for hero images
            img_resized.save(
                output_path,
                'WEBP',
                quality=90,   # Higher quality for hero images
                method=6,     # Highest compression effort
                optimize=True
            )
            
            print(f"✓ Created hero thumbnail: {os.path.basename(output_path)} ({size}x{size})")
            return True
            
    except Exception as e:
        print(f"✗ Error processing {input_path}: {str(e)}")
        return False

def main():
    # Ensure we're in the right directory
    if not os.path.exists('hero-thumbs'):
        print("Creating hero-thumbs directory...")
        os.makedirs('hero-thumbs')
    
    print("Photo Collections - Hero Thumbnail Optimizer")
    print("=" * 60)
    
    success_count = 0
    total_count = len(COLLECTIONS)
    total_size_before = 0
    total_size_after = 0
    
    for collection_id, config in COLLECTIONS.items():
        input_path = config['input']
        output_path = config['output']
        collection_name = config['name']
        
        print(f"\nProcessing {collection_name}...")
        print(f"  Input:  {input_path}")
        print(f"  Output: {output_path}")
        
        # Check if input file exists
        if not os.path.exists(input_path):
            print(f"  ✗ Input file not found: {input_path}")
            continue
        
        # Get original file size
        original_size = os.path.getsize(input_path)
        original_size_kb = original_size / 1024
        total_size_before += original_size
        
        print(f"  Original size: {original_size_kb:.1f}KB")
        
        # Create thumbnail
        if optimize_hero_thumbnail(input_path, output_path):
            success_count += 1
            
            # Show optimized file size and savings
            if os.path.exists(output_path):
                new_size = os.path.getsize(output_path)
                new_size_kb = new_size / 1024
                total_size_after += new_size
                savings_percent = ((original_size - new_size) / original_size) * 100
                
                print(f"  Optimized size: {new_size_kb:.1f}KB")
                print(f"  Savings: {savings_percent:.1f}% reduction")
    
    print("\n" + "=" * 60)
    print(f"Hero thumbnail optimization complete!")
    print(f"Successfully processed: {success_count}/{total_count} collections")
    
    if total_size_before > 0:
        total_savings = ((total_size_before - total_size_after) / total_size_before) * 100
        print(f"Total size before: {total_size_before/1024:.1f}KB")
        print(f"Total size after: {total_size_after/1024:.1f}KB")
        print(f"Total savings: {total_savings:.1f}% reduction")
    
    if success_count < total_count:
        print(f"Failed to process: {total_count - success_count} collections")
        print("Check file paths and ensure all input images exist.")
    else:
        print("All hero thumbnails generated successfully!")
        print("\nNext steps:")
        print("1. Import the new hero thumbnails in photo-collections.js")
        print("2. Update the collection data structure to use optimized heroes")
        print("3. Test the improved loading performance")

if __name__ == "__main__":
    main()