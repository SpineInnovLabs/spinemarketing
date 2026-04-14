const { chromium } = require('playwright');
const path = require('path');

const BASE = 'https://e6fc9c60-ba91-4e6d-9025-1640c1c6ec79-00-13hhn5rrmitjv.worf.replit.dev/__mockup/preview/linkedin-campaign';

const designs = [
  // LinkedIn Sponsored Ads (1200x628)
  { name: 'Ad-Pain', component: 'AdPain', w: 1200, h: 628 },
  { name: 'Ad-Product', component: 'AdProduct', w: 1200, h: 628 },
  { name: 'Ad-Trust', component: 'AdTrust', w: 1200, h: 628 },
  { name: 'Ad-Vision', component: 'AdVision', w: 1200, h: 628 },
  { name: 'Ad-Curiosity', component: 'AdCuriosity', w: 1200, h: 628 },

  // LinkedIn Organic Posts (1080x1080)
  { name: 'Post-Tagline', component: 'PostTagline', w: 1080, h: 1080 },
  { name: 'Post-Spine', component: 'PostSpine', w: 1080, h: 1080 },
  { name: 'Post-Governance', component: 'PostGovernance', w: 1080, h: 1080 },
  { name: 'Post-Workbench', component: 'PostWorkbench', w: 1080, h: 1080 },
  { name: 'Post-Category', component: 'PostCategory', w: 1080, h: 1080 },

  // LinkedIn Company Banners (1128x191)
  { name: 'Banner-Tagline', component: 'BannerTagline', w: 1128, h: 191 },
  { name: 'Banner-Spine', component: 'BannerSpine', w: 1128, h: 191 },
  { name: 'Banner-Governance', component: 'BannerGovernance', w: 1128, h: 191 },

  // Persona Banners A (1128x191)
  { name: 'Banner-AccountSuccess-A', component: 'BannerAccountSuccess', w: 1128, h: 191 },
  { name: 'Banner-BusinessOps-A', component: 'BannerBusinessOps', w: 1128, h: 191 },
  { name: 'Banner-PersonalOps-A', component: 'BannerPersonalOps', w: 1128, h: 191 },

  // Persona Banners B (1128x191)
  { name: 'Banner-AccountSuccess-B', component: 'BannerAccountSuccessB', w: 1128, h: 191 },
  { name: 'Banner-BusinessOps-B', component: 'BannerBusinessOpsB', w: 1128, h: 191 },
  { name: 'Banner-PersonalOps-B', component: 'BannerPersonalOpsB', w: 1128, h: 191 },

  // Persona Posts A (1080x1080)
  { name: 'Post-AccountSuccess-A', component: 'PostAccountSuccess', w: 1080, h: 1080 },
  { name: 'Post-BusinessOps-A', component: 'PostBusinessOps', w: 1080, h: 1080 },
  { name: 'Post-PersonalOps-A', component: 'PostPersonalOps', w: 1080, h: 1080 },

  // Persona Posts B (1080x1080)
  { name: 'Post-AccountSuccess-B', component: 'PostAccountSuccessB', w: 1080, h: 1080 },
  { name: 'Post-BusinessOps-B', component: 'PostBusinessOpsB', w: 1080, h: 1080 },
  { name: 'Post-PersonalOps-B', component: 'PostPersonalOpsB', w: 1080, h: 1080 },

  // WhatsApp Status (1080x1920)
  { name: 'WA-Status-Pain', component: 'WAStatusPain', w: 1080, h: 1920 },
  { name: 'WA-Status-Product', component: 'WAStatusProduct', w: 1080, h: 1920 },
  { name: 'WA-Status-Governance', component: 'WAStatusGovernance', w: 1080, h: 1920 },

  // WhatsApp Share (1080x1080)
  { name: 'WA-Share-Tagline', component: 'WAShareTagline', w: 1080, h: 1080 },
  { name: 'WA-Share-Curiosity', component: 'WAShareCuriosity', w: 1080, h: 1080 },

  // WhatsApp Catalogs (1080x1350)
  { name: 'WA-Catalog-AccountSuccess', component: 'WACatalogAccountSuccess', w: 1080, h: 1350 },
  { name: 'WA-Catalog-BusinessOps', component: 'WACatalogBusinessOps', w: 1080, h: 1350 },
  { name: 'WA-Catalog-PersonalOps', component: 'WACatalogPersonalOps', w: 1080, h: 1350 },
];

// Carousel slides - each slide is 1080x1080
const carouselSlides = [
  { name: 'Carousel-AccountSuccess', component: 'CarouselAccountSuccess', slides: 5 },
  { name: 'Carousel-BusinessOps', component: 'CarouselBusinessOps', slides: 5 },
  { name: 'Carousel-PersonalOps', component: 'CarouselPersonalOps', slides: 5 },
];

(async () => {
  const browser = await chromium.launch();
  const outDir = path.join(__dirname, 'exports');
  let count = 0;

  // Export single-view designs
  for (const d of designs) {
    const ctx = await browser.newContext({ viewport: { width: d.w, height: d.h } });
    const page = await ctx.newPage();
    try {
      await page.goto(`${BASE}/${d.component}`, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(outDir, `${d.name}.png`), type: 'png' });
      count++;
      console.log(`✓ ${d.name} (${d.w}x${d.h})`);
    } catch (e) {
      console.log(`✗ ${d.name}: ${e.message.slice(0, 80)}`);
    }
    await ctx.close();
  }

  // Export carousel slides individually
  for (const c of carouselSlides) {
    const slideSize = 1080;
    const ctx = await browser.newContext({ viewport: { width: slideSize * c.slides, height: slideSize } });
    const page = await ctx.newPage();
    try {
      await page.goto(`${BASE}/${c.component}`, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(500);

      for (let s = 0; s < c.slides; s++) {
        await page.evaluate((offset) => window.scrollTo(offset, 0), s * slideSize);
        await page.waitForTimeout(200);
        await page.screenshot({
          path: path.join(outDir, `${c.name}-Slide${s + 1}.png`),
          type: 'png',
          clip: { x: s * slideSize, y: 0, width: slideSize, height: slideSize }
        });
        count++;
        console.log(`✓ ${c.name}-Slide${s + 1} (${slideSize}x${slideSize})`);
      }
    } catch (e) {
      console.log(`✗ ${c.name}: ${e.message.slice(0, 80)}`);
    }
    await ctx.close();
  }

  await browser.close();
  console.log(`\nExported ${count} images to exports/`);
})();
