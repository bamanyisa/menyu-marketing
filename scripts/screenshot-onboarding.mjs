import { chromium } from 'playwright'
import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const OUT_PNG  = path.join(ROOT, 'scripts', '_onboarding_raw.png')
const OUT_WEBP = path.join(ROOT, 'public', 'resource-allocation', 'onboarding.webp')

const PAD = 36

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 2,
})

await page.goto('http://localhost:61001/?story=onboarding--default&mode=preview', { waitUntil: 'networkidle' })
await page.waitForTimeout(500)

// Target the inner form container from AuthLayout
const form = page.locator('div.space-y-6').first()
const box = await form.boundingBox()

const clip = {
  x: Math.max(0, box.x - PAD),
  y: Math.max(0, box.y - PAD),
  width: box.width + PAD * 2,
  height: box.height + PAD * 2,
}

const buf = await page.screenshot({ clip })
await browser.close()

writeFileSync(OUT_PNG, buf)
console.log('✅ PNG saved:', OUT_PNG)

const pyScript = path.join(ROOT, 'scripts', '_convert_onboarding.py')
writeFileSync(pyScript,
  `from PIL import Image\nimg = Image.open(r'${OUT_PNG}')\nimg.save(r'${OUT_WEBP}', 'WEBP', quality=95, method=6)\nprint(f'Saved {img.size[0]}x{img.size[1]}')\n`
)
try {
  const result = execSync(`python3 "${pyScript}"`, { encoding: 'utf8' })
  console.log('✅', result.trim())
  console.log('📁 public/resource-allocation/onboarding.webp updated')
} catch (e) {
  console.error('WebP conversion failed:', e.message)
}
