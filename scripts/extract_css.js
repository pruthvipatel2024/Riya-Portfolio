const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "../riya-jethva-portfolio (5).html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");

const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);

if (styleMatch) {
  const css = styleMatch[1].trim();
  fs.writeFileSync(path.join(__dirname, "../src/app/globals.css"), css);
  console.log(`Updated src/app/globals.css from v5 (${css.length} bytes)!`);
} else {
  console.error("No <style> block found in v5!");
}
