from PIL import Image
from pathlib import Path

public = Path(__file__).resolve().parents[1] / 'frontend' / 'public'
src = public / 'logo.jpeg'
if not src.exists():
    print('Source logo not found:', src)
    raise SystemExit(1)

im = Image.open(src).convert('RGBA')
orig_w, orig_h = im.size
print('Original size:', orig_w, orig_h)

# target widths
w_small = 300
w_1x = 400
w_2x = 800

# helper
def resize_and_save(img, target_w, outpath, quality=90, webp=False):
    w, h = img.size
    if w == target_w:
        out = img
    else:
        new_h = int(target_w * h / w)
        out = img.resize((target_w, new_h), Image.LANCZOS)
    if webp:
        out.save(outpath, format='WEBP', quality=quality)
    else:
        out.save(outpath, format='PNG', optimize=True)
    print('Saved', outpath)

# Ensure public exists
public.mkdir(parents=True, exist_ok=True)

# small
resize_and_save(im, w_small, public / 'logo.small.png')
resize_and_save(im, w_small, public / 'logo.small.webp', webp=True)

# 1x
resize_and_save(im, w_1x, public / 'logo.png')
resize_and_save(im, w_1x, public / 'logo.webp', webp=True)

# 2x (if original smaller, use original width)
target_2x = w_2x if orig_w >= w_2x else orig_w
resize_and_save(im, target_2x, public / 'logo@2x.png')
resize_and_save(im, target_2x, public / 'logo@2x.webp', webp=True)

print('Done')
