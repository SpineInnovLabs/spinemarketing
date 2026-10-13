import fs from "fs";
import path from "path";
import sharp from "sharp";

async function getImages(dir: string): Promise<string[]> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImages(fullPath)));
    } else if (
      entry.name.endsWith(".webp") &&
      !entry.name.includes("-640w") &&
      !entry.name.includes("-960w") &&
      !entry.name.includes("-1280w") &&
      !entry.name.includes("-1440w") &&
      !entry.name.includes("-2880w") &&
      !entry.name.includes("-390w") &&
      !entry.name.includes("-780w") &&
      !entry.name.includes("-og")
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

async function processAll() {
  const root = path.join(process.cwd(), "public/images/workbench");
  if (!fs.existsSync(root)) {
    console.error("public/images/workbench does not exist");
    return;
  }

  const images = await getImages(root);
  console.log(`Found ${images.length} base workbench screenshots to process.`);

  let processedCount = 0;

  for (const imgPath of images) {
    const parsed = path.parse(imgPath);
    const meta = await sharp(imgPath).metadata();

    if (!meta.width || !meta.height) continue;

    if (meta.width === 1440 && meta.height === 900) {
      // 16:10 Desktop captures
      const targets = [
        { suffix: "-640w", width: 640, height: 400, quality: 82 },
        { suffix: "-960w", width: 960, height: 600, quality: 85 },
        { suffix: "-1280w", width: 1280, height: 800, quality: 88 },
        { suffix: "-1440w", width: 1440, height: 900, quality: 90 },
        { suffix: "-2880w", width: 2880, height: 1800, quality: 90 },
      ];

      for (const t of targets) {
        const outPath = path.join(parsed.dir, `${parsed.name}${t.suffix}.webp`);
        await sharp(imgPath)
          .resize(t.width, t.height, { fit: "contain" })
          .webp({ quality: t.quality, effort: 4 })
          .toFile(outPath);
      }

      // Generate 1200x630 OG crop for social sharing
      const ogPath = path.join(parsed.dir, `${parsed.name}-og.webp`);
      await sharp(imgPath)
        .resize(1200, 630, { fit: "cover", position: "top" })
        .webp({ quality: 85, effort: 4 })
        .toFile(ogPath);

      processedCount++;
    } else if (meta.width === 390 && meta.height === 844) {
      // Mobile captures
      const mobileTargets = [
        { suffix: "-390w", width: 390, height: 844, quality: 85 },
        { suffix: "-780w", width: 780, height: 1688, quality: 88 },
      ];

      for (const t of mobileTargets) {
        const outPath = path.join(parsed.dir, `${parsed.name}${t.suffix}.webp`);
        await sharp(imgPath)
          .resize(t.width, t.height, { fit: "contain" })
          .webp({ quality: t.quality, effort: 4 })
          .toFile(outPath);
      }

      processedCount++;
    }
  }

  console.log(`✓ Successfully generated responsive multi-tier assets for ${processedCount} screenshots.`);
}

processAll().catch((err) => {
  console.error("Error generating responsive screenshots:", err);
  process.exit(1);
});
