const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "../riya-jethva-portfolio (5).html");
const content = fs.readFileSync(htmlPath, "utf-8");

// Find all sections
const sectionMatches = content.match(/<section[^>]*id="([^"]+)"[^>]*>/g) || [];
console.log("Sections found in v5:", sectionMatches);

// Find all images (base64 and src)
const imgMatches = [];
const imgRegex = /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/g;
let match;
while ((match = imgRegex.exec(content)) !== null) {
  imgMatches.push({ src: match[1].substring(0, 40) + "...", alt: match[2] });
}
console.log(`Total images in v5: ${imgMatches.length}`);
imgMatches.forEach((img, i) => console.log(`Img ${i + 1}: ${img.alt}`));
