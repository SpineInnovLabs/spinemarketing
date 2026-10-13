import assert from "node:assert/strict";
import { test } from "node:test";

import worker, { type Env } from "../worker/index";

const origin = "https://spineinnovlabs.spineworkspace.com";

function assetEnv(response: Response): Env {
  return {
    ASSETS: {
      fetch: async () => response,
    } as unknown as Env["ASSETS"],
  };
}

for (const status of [204, 205, 304]) {
  test(`edge wrapper returns a bodyless HTTP ${status} response`, async () => {
    // Deliberately simulate a non-conforming origin/fetch adapter exposing a
    // stream on a no-body response. The Worker must defensively discard it.
    const assetResponse = {
      status,
      statusText: "No body",
      headers: new Headers({ "X-Test-Origin": "retained" }),
      body: new ReadableStream(),
    } as unknown as Response;

    const result = await worker.fetch(
      new Request(`${origin}/_next/static/asset.js`),
      assetEnv(assetResponse),
    );

    assert.equal(result.status, status);
    assert.equal(result.body, null);
    assert.equal(result.headers.get("X-Test-Origin"), "retained");
    assert.equal(result.headers.get("X-Content-Type-Options"), "nosniff");
  });
}

test("edge wrapper preserves an ordinary asset response and security headers", async () => {
  const result = await worker.fetch(
    new Request(`${origin}/_next/static/asset.js`),
    assetEnv(new Response("ok", { status: 200, headers: { "Content-Type": "text/plain" } })),
  );

  assert.equal(result.status, 200);
  assert.equal(await result.text(), "ok");
  assert.equal(result.headers.get("X-Content-Type-Options"), "nosniff");
  assert.ok(result.headers.get("Strict-Transport-Security")?.includes("max-age="));
});
