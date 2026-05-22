/**
 * Capture a crisp 4x DPR screenshot of the DashboardMenu Ladle story
 * and save it as public/hero.webp.
 *
 * Prerequisites: Ladle must be running (npm run ladle --port 61001)
 * Usage: node scripts/screenshot.mjs
 */

import { chromium } from 'playwright'
import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// "Screenshot" story variant — app rendered inside a padded wrapper
// on a light background, giving the zoomed-out floating feel.
const LADLE_URL = 'http://localhost:61001/?story=dashboard-menu--screenshot&mode=preview'
const OUT_PNG   = path.join(ROOT, 'scripts', '_hero_raw.png')
const OUT_WEBP  = path.join(ROOT, 'public', 'hero.webp')

// Wide viewport so the padded app looks naturally zoomed out.
const VIEWPORT_WIDTH  = 1920
const VIEWPORT_HEIGHT = 1080
const DPR = 4  // device pixel ratio — 4x = ultra-sharp

console.log(`📸  Capturing DashboardMenu story at ${DPR}x DPR…`)

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

// Extra settle time for transitions
await page.waitForTimeout(500)

// Viewport-only — captures exactly what's visible, including the
// sidebar user profile pinned to the bottom.
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
  console.log(`📁  public/hero.webp updated — rebuild or copy to out/`)
} catch (e) {
  console.error('WebP conversion failed — PNG is at', OUT_PNG)
  console.error(e.message)
}
