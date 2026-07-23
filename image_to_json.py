import json
from PIL import Image
import sys
import os

def image_to_json(image_path, output_path):
    try:
        print(f"Loading image from {image_path}...")
        img = Image.open(image_path)
        img = img.convert('RGB')
        width, height = img.size
        
        print(f"Image loaded. Size: {width}x{height}. Processing pixels...")
        pixel_data = []
        for y in range(height):
            row = []
            for x in range(width):
                r, g, b = img.getpixel((x, y))
                # Storing as [R, G, B] array for each pixel
                row.append([r, g, b])
            pixel_data.append(row)
            
        print(f"Pixels processed. Writing to JSON file...")
        with open(output_path, 'w') as f:
            json.dump(pixel_data, f)
            
        print(f"Successfully converted image to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python image_to_json.py <input_image_path> <output_json_path>")
    else:
        image_to_json(sys.argv[1], sys.argv[2])
