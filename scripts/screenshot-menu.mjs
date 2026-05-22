import { chromium } from 'playwright'
import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const OUT_PNG  = path.join(ROOT, 'scripts', '_menu_raw.png')
const OUT_WEBP = path.join(ROOT, 'public', 'resource-allocation', 'menu.webp')

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 3,
})

await page.goto('http://localhost:61001/?story=public-menu--default&mode=preview', { waitUntil: 'networkidle' })

// Wait for cover image to load
await page.waitForTimeout(1500)

// Capture just the header card element — tight crop, zero background
const headerCard = page.locator('main > div').first()
const buf = await headerCard.screenshot()
await browser.close()

writeFileSync(OUT_PNG, buf)
console.log('✅ PNG saved:', OUT_PNG)

const pyScript = path.join(ROOT, 'scripts', '_convert_menu.py')
writeFileSync(pyScript,
  `from PIL import Image\nimg = Image.open(r'${OUT_PNG}')\nimg.save(r'${OUT_WEBP}', 'WEBP', quality=95, method=6)\nprint(f'Saved {img.size[0]}x{img.size[1]}')\n`
)
try {
  const result = execSync(`python3 "${pyScript}"`, { encoding: 'utf8' })
  console.log('✅', result.trim())
  console.log('📁 public/resource-allocation/menu.webp updated')
} catch (e) {
  console.error('WebP conversion failed — PNG at', OUT_PNG)
  console.error(e.message)
}
