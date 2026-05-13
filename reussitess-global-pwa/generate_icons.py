from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, filename):
    img = Image.new('RGB', (size, size), color='#667eea')
    draw = ImageDraw.Draw(img)
    
    # Cercle central violet foncé
    margin = size // 8
    draw.ellipse([margin, margin, size - margin, size - margin], fill='#764ba2')
    
    # Texte "R®"
    text = "R®"
    font_size = size // 3
    try:
        font = ImageFont.truetype("/system/fonts/Roboto-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) // 2
    y = (size - th) // 2
    draw.text((x, y), text, fill='white', font=font)
    
    img.save(filename, 'PNG')
    print(f"✅ {filename} créé ({size}x{size})")

create_icon(192, 'icon-192.png')
create_icon(512, 'icon-512.png')
