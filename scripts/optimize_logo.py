from PIL import Image
from pathlib import Path

public = Path(__file__).resolve().parents[1] / 'frontend' / 'public'
png = public / 'logo.png'
webp = public / 'logo.webp'
if not png.exists():
    print('logo.png not found, aborting')
    raise SystemExit(1)

def print_size(p: Path):
    print(p.name, '->', p.stat().st_size, 'bytes')

im = Image.open(png).convert('RGBA')
print('Before sizes:')
print_size(png)
if webp.exists():
    print_size(webp)

# Create a quantized PNG (palette) to reduce size
quant = im.convert('P', palette=Image.ADAPTIVE, colors=256)
quant.save(public / 'logo.optimized.png', optimize=True)

# Recreate webp at lower quality
im.save(public / 'logo.optimized.webp', format='WEBP', quality=75)

print('After sizes:')
print_size(public / 'logo.optimized.png')
print_size(public / 'logo.optimized.webp')

print('Done')
