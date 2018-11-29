// run.js
const fs = require("fs");
const babel = require("babel-core");
const daguo_plugin = require("./test");

const data = fs.readFileSync(`${__dirname}/before.js`, { encoding: "utf-8" });

// convert from a buffer to a string
const src = data.toString();
// use our plugin to transform the source
const out = babel.transform(src, {
  plugins: [daguo_plugin]
});
// print the generated code to screen
console.log("out.code:", out.code);
