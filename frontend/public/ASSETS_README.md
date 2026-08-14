Place frontend static assets (images, icons) here.

Add `image_5.png`, `image_6.png` and the restaurant logo as `logo.png`.

Optimized versions will be generated automatically by the project's scripts:
- `logo.png` — default 1x PNG
- `logo@2x.png` — 2x PNG
- `logo.webp` — default WebP
- `logo@2x.webp` — 2x WebP
- `logo.small.png`, `logo.small.webp` — small variants
- `logo.optimized.png`, `logo.optimized.webp` — aggressively optimized variants

To (re)generate optimized images run:

```bash
python scripts/convert_logo.py
python scripts/optimize_logo.py
```
