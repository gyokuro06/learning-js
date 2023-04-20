import * as assert from "node:assert";
import { readFile } from "node:fs/promises";
import { convert } from "../converter.js";

it("converts Markdown to HTML (GFM=False)", async () => {
    const sample = await readFile("test/fixtures/sample.md", { encoding: "utf8" });
    const expected = await readFile("test/fixtures/expected.html", { encoding: "utf8" });
    assert.strictEqual(convert(sample, { gfm: false }).trimEnd(), expected.trimEnd());
});

it("converts Markdown to HTML (GFM=True)", async () => {
    const sample = await readFile("test/fixtures/sample.md", { encoding: "utf8" });
    const expected = await readFile("test/fixtures/expected-gfm.html", { encoding: "utf8" });
    assert.strictEqual(convert(sample, { gfm: true }).trimEnd(), expected.trimEnd());
});
