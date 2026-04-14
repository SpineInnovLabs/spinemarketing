#!/bin/bash
set -e
BASE="https://e6fc9c60-ba91-4e6d-9025-1640c1c6ec79-00-13hhn5rrmitjv.worf.replit.dev/__mockup/preview/linkedin-campaign"
OUT="exports"
mkdir -p "$OUT"

capture() {
  local name="$1" component="$2" w="$3" h="$4"
  echo "Exporting $name (${w}x${h})..."
  npx playwright screenshot --viewport-size="${w},${h}" --wait-for-timeout=800 "$BASE/$component" "$OUT/$name.png" 2>/dev/null
}

# LinkedIn Sponsored Ads (1200x628)
capture "Ad-Pain" "AdPain" 1200 628 &
capture "Ad-Product" "AdProduct" 1200 628 &
capture "Ad-Trust" "AdTrust" 1200 628 &
capture "Ad-Vision" "AdVision" 1200 628 &
capture "Ad-Curiosity" "AdCuriosity" 1200 628 &
wait

# LinkedIn Organic Posts (1080x1080)
capture "Post-Tagline" "PostTagline" 1080 1080 &
capture "Post-Spine" "PostSpine" 1080 1080 &
capture "Post-Governance" "PostGovernance" 1080 1080 &
capture "Post-Workbench" "PostWorkbench" 1080 1080 &
capture "Post-Category" "PostCategory" 1080 1080 &
wait

# LinkedIn Company Banners (1128x191)
capture "Banner-Tagline" "BannerTagline" 1128 191 &
capture "Banner-Spine" "BannerSpine" 1128 191 &
capture "Banner-Governance" "BannerGovernance" 1128 191 &
wait

# Persona Banners A
capture "Banner-AccountSuccess-A" "BannerAccountSuccess" 1128 191 &
capture "Banner-BusinessOps-A" "BannerBusinessOps" 1128 191 &
capture "Banner-PersonalOps-A" "BannerPersonalOps" 1128 191 &
wait

# Persona Banners B
capture "Banner-AccountSuccess-B" "BannerAccountSuccessB" 1128 191 &
capture "Banner-BusinessOps-B" "BannerBusinessOpsB" 1128 191 &
capture "Banner-PersonalOps-B" "BannerPersonalOpsB" 1128 191 &
wait

# Persona Posts A (1080x1080)
capture "Post-AccountSuccess-A" "PostAccountSuccess" 1080 1080 &
capture "Post-BusinessOps-A" "PostBusinessOps" 1080 1080 &
capture "Post-PersonalOps-A" "PostPersonalOps" 1080 1080 &
wait

# Persona Posts B (1080x1080)
capture "Post-AccountSuccess-B" "PostAccountSuccessB" 1080 1080 &
capture "Post-BusinessOps-B" "PostBusinessOpsB" 1080 1080 &
capture "Post-PersonalOps-B" "PostPersonalOpsB" 1080 1080 &
wait

# WhatsApp Status (1080x1920)
capture "WA-Status-Pain" "WAStatusPain" 1080 1920 &
capture "WA-Status-Product" "WAStatusProduct" 1080 1920 &
capture "WA-Status-Governance" "WAStatusGovernance" 1080 1920 &
wait

# WhatsApp Share (1080x1080)
capture "WA-Share-Tagline" "WAShareTagline" 1080 1080 &
capture "WA-Share-Curiosity" "WAShareCuriosity" 1080 1080 &
wait

# WhatsApp Catalogs (1080x1350)
capture "WA-Catalog-AccountSuccess" "WACatalogAccountSuccess" 1080 1350 &
capture "WA-Catalog-BusinessOps" "WACatalogBusinessOps" 1080 1350 &
capture "WA-Catalog-PersonalOps" "WACatalogPersonalOps" 1080 1350 &
wait

# Carousel slides (1080x1080 each slide) - need full-page then crop
for persona in AccountSuccess BusinessOps PersonalOps; do
  echo "Exporting Carousel-${persona} slides..."
  npx playwright screenshot --viewport-size="5400,1080" --full-page --wait-for-timeout=800 "$BASE/Carousel${persona}" "$OUT/Carousel-${persona}-full.png" 2>/dev/null
done

echo ""
echo "=== Export complete ==="
ls -la "$OUT"/*.png | wc -l
echo "files exported to exports/"
