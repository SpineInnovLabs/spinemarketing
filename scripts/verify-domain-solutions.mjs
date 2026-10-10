import { readFileSync, readdirSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";
const compiled=ts.transpileModule(readFileSync("lib/solution-domains.ts","utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const sandbox={exports:{}};vm.runInNewContext(compiled,sandbox,{timeout:1000});
const domains=sandbox.exports.SOLUTION_DOMAINS;
const routes=readdirSync("out/solutions").filter(file=>file.endsWith(".html")).map(file=>file.slice(0,-5));
if(routes.length!==20||routes.length!==Object.keys(domains).length)throw Error("Every exported solution requires explicit domain features.");
const plain=s=>s.replace(/<!--.*?-->/g,"").replace(/<[^>]*>/g,"").replaceAll("&amp;","&").replaceAll("&#x27;","'").replaceAll("&quot;",'"').replace(/\s+/g," ").trim();
const allFeatures=new Set();
for(const slug of routes){
 const d=domains[slug];if(!d)throw Error("Missing domain: "+slug);
 const html=readFileSync(`out/solutions/${slug}.html`,"utf8");
 const feature=html.match(/<section\b[^>]*\bid="domain-features"[^>]*>([\s\S]*?)<\/section>/)?.[1];
 const workflow=html.match(/<section\b[^>]*\bid="domain-workflow"[^>]*>([\s\S]*?)<\/section>/)?.[1];
 if(!feature||!workflow||(feature.match(/<article\b/g)||[]).length!==4||(workflow.match(/<li\b/g)||[]).length!==3)throw Error("Incomplete visible domain sections: "+slug);
 for(const [title,description] of d.features){if(!plain(feature).includes(title)||!plain(feature).includes(description))throw Error("Omitted feature on "+slug+": "+title);if(allFeatures.has(description))throw Error("Repeated generic feature description: "+slug);allFeatures.add(description)}
 for(const step of d.workflow)if(!plain(workflow).includes(step))throw Error("Omitted domain workflow: "+slug);
 for(const source of d.sources)if(!plain(feature).includes(source))throw Error("Omitted domain source: "+slug);
}
const hub=readFileSync("out/solutions.html","utf8");
for(const slug of routes)if(!hub.includes(`href="/solutions/${slug}"`))throw Error("Solution index omits "+slug);
console.log(`Domain features verified: ${routes.length} solutions, ${allFeatures.size} distinct feature descriptions, source context and three-step workflows.`);
