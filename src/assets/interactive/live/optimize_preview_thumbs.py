#!/usr/bin/env python3
"""
Interactive Live Experiences - Preview Thumbnail Optimizer
Creates 256x256 center-cropped WebP thumbnails for fast preview loading.

Usage:
    cd src/assets/interactive/live/
    python3 optimize_preview_thumbs.py

This script:
1. Processes the first image from each project gallery
2. Creates 256x256 center-cropped square thumbnails
3. Optimizes for fast loading in hover previews
4. Handles both direct images and existing video thumbnails
"""

import os
import sys
from PIL import Image, ImageOps
import json

# Project data mapping first images to generate thumbnails
PROJECTS = {
    'sketching-flock': {
        'first_image': 'sketching-flock/thumbnails/IMG_6871_optimized_thumb.jpg',  # Video thumbnail
        'output_name': 'sketching-flock.webp'
    },
    'we-play': {
        'first_image': 'we-play/thumbnails/IMG_7210_optimized_thumb.jpg',  # Video thumbnail
        'output_name': 'we-play.webp'
    },
    'blind-spots': {
        'first_image': 'blind-spots/bs-6313.webp',  # Direct image
        'output_name': 'blind-spots.webp'
    },
    'the-reader': {
        'first_image': 'the-reader/thumbnails/the-reader-video_optimized_thumb.jpg',  # Video thumbnail
        'output_name': 'the-reader.webp'
    },
    'long-winter-13-1': {
        'first_image': 'lw-13-1/thumbnails/LW13-1_comp_optimized_thumb.jpg',  # Video thumbnail
        'output_name': 'long-winter-13-1.webp'
    },
    'game-set-match': {
        'first_image': 'game-set-match/IMG_2943.webp',  # Direct image
        'output_name': 'game-set-match.webp'
    },
    'live-coding': {
        'first_image': 'live-coding/thumbnails/IMG_2870_optimized_thumb.jpg',  # Video thumbnail
        'output_name': 'live-coding.webp'
    },
    'bird-conductor': {
        'first_image': 'bird-conductor/thumbnails/IMG_1681_optimized_thumb.jpg',  # Video thumbnail
        'output_name': 'bird-conductor.webp'
    },
    'surveil-yourself': {
        'first_image': 'surveil-yourself/thumbnails/IMG_0288_optimized_thumb.jpg',  # Video thumbnail
        'output_name': 'surveil-yourself.webp'
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

def optimize_preview_thumbnail(input_path, output_path, size=256):
    """
    Create optimized preview thumbnail:
    1. Center crop to square
    2. Resize to target size
    3. Convert to WebP with optimization
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
            
            # Save as optimized WebP
            img_resized.save(
                output_path,
                'WEBP',
                quality=85,  # Good quality for small previews
                method=6,    # Highest compression effort
                optimize=True
            )
            
            print(f"✓ Created preview thumbnail: {os.path.basename(output_path)} ({size}x{size})")
            return True
            
    except Exception as e:
        print(f"✗ Error processing {input_path}: {str(e)}")
        return False

def main():
    # Ensure we're in the right directory
    if not os.path.exists('preview-thumbs'):
        print("Creating preview-thumbs directory...")
        os.makedirs('preview-thumbs')
    
    print("Interactive Live Experiences - Preview Thumbnail Optimizer")
    print("=" * 60)
    
    success_count = 0
    total_count = len(PROJECTS)
    
    for project_slug, config in PROJECTS.items():
        input_path = config['first_image']
        output_path = os.path.join('preview-thumbs', config['output_name'])
        
        print(f"\nProcessing {project_slug}...")
        print(f"  Input:  {input_path}")
        print(f"  Output: {output_path}")
        
        # Check if input file exists
        if not os.path.exists(input_path):
            print(f"  ✗ Input file not found: {input_path}")
            continue
        
        # Create thumbnail
        if optimize_preview_thumbnail(input_path, output_path):
            success_count += 1
        
        # Show file size info
        if os.path.exists(output_path):
            size_kb = os.path.getsize(output_path) / 1024
            print(f"  Size: {size_kb:.1f}KB")
    
    print("\n" + "=" * 60)
    print(f"Preview thumbnail optimization complete!")
    print(f"Successfully processed: {success_count}/{total_count} projects")
    
    if success_count < total_count:
        print(f"Failed to process: {total_count - success_count} projects")
        print("Check file paths and ensure all input images exist.")
    else:
        print("All preview thumbnails generated successfully!")
        print("\nNext steps:")
        print("1. Import the new thumbnails in project-details.js")
        print("2. Update the loadPreviewMedia() function in sketch.js")
        print("3. Test the improved preview loading performance")

if __name__ == "__main__":
    main()