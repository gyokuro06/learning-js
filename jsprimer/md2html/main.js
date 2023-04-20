import { program } from "commander";
import { readFile } from "node:fs/promises";
import { convert } from "./converter.js";

program.option("--gfm", "GFMを有効にする");

program.parse(process.argv);
const filePath = program.args[0];
const options = program.opts();

readFile(filePath, { encoding: "utf8" }).then(file => {
    const html = convert(file, options);
    console.log(html);
}).catch(err => {
    console.error(err.message);
    process.exit(1);
});
