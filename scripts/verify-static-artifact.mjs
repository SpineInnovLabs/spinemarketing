/**
 * Prevent a blank, stale or product-workbench page from being deployed as the
 * Spine InnovLabs corporate site.
 */
import { readFileSync, statSync } from "node:fs";
const text = readFileSync("out/index.html", "utf8");
const sitemap = readFileSync("out/sitemap.xml", "utf8");
if (!text.includes("more connected business") || !text.includes("Spine InnovLabs")) {
  throw new Error("Static export missing approved corporate hero/company identity.");
}
if (text.includes("Good morning, Operator") || text.includes("Customer Zero")) {
  throw new Error("Authenticated/demo workspace content must not become public corporate homepage.");
}
if (!sitemap.includes("spineinnovlabs.spineworkspace.com")) {
  throw new Error("Sitemap is missing current production corporate origin.");
}
if (statSync("out/index.html").size < 1024) {
  throw new Error("Suspiciously small production HTML.");
}
console.log("Corporate HTML and sitemap artifact verified.");
