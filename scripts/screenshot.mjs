/**
 * Capture a 16:9 hero screenshot of the PublicMenu Ladle story.
 * Prerequisites: npm run ladle (starts on port 61001)
 * Usage: node scripts/screenshot.mjs
 */

import { chromium } from 'playwright'
import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// Default story at a wide viewport — the extra width naturally makes
// the UI feel zoomed out without any artificial wrapper.
const LADLE_URL = 'http://localhost:61001/?story=public-menu--default&mode=preview'
const OUT_PNG   = path.join(ROOT, 'scripts', '_hero_raw.png')
const OUT_WEBP  = path.join(ROOT, 'public', 'hero.webp')

const VIEWPORT_WIDTH  = 1440
const VIEWPORT_HEIGHT = 810
const DPR = 4

console.log(`📸  Capturing PublicMenu story at ${VIEWPORT_WIDTH}×${VIEWPORT_HEIGHT} ${DPR}x DPR…`)

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
  deviceScaleFactor: DPR,
})

await page.goto(LADLE_URL, { waitUntil: 'networkidle' })

// Wait for all images to finish loading
await page.evaluate(() =>
  Promise.all(
    Array.from(document.images).map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise(r => { img.onload = r; img.onerror = r })
    )
  )
)

await page.waitForTimeout(800)

const buf = await page.screenshot()
await browser.close()

writeFileSync(OUT_PNG, buf)
console.log(`✅  PNG saved: ${OUT_PNG}`)

// Convert to high-quality WebP with Python Pillow
const pyScript = path.join(ROOT, 'scripts', '_convert.py')
writeFileSync(pyScript,
  `from PIL import Image\nimg = Image.open(r'${OUT_PNG}')\nimg.save(r'${OUT_WEBP}', 'WEBP', quality=95, method=6)\nprint(f'Saved WebP {img.size[0]}x{img.size[1]}')\n`
)
try {
  const result = execSync(`python3 "${pyScript}"`, { encoding: 'utf8' })
  console.log(`✅  ${result.trim()}`)
  console.log(`📁  public/hero.webp updated`)
} catch (e) {
  console.error('WebP conversion failed — PNG is at', OUT_PNG)
  console.error(e.message)
}
