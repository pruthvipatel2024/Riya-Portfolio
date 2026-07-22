const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "../riya-jethva-portfolio (5).html");
const outputDir = path.join(__dirname, "../public/images");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const content = fs.readFileSync(htmlPath, "utf-8");

const imgRegex = /<img[^>]+src="(data:image\/([^;]+);base64,([^"]+))"[^>]*alt="([^"]*)"/g;
let match;
let index = 1;
const manifest = [];

while ((match = imgRegex.exec(content)) !== null) {
  const mimeType = match[2]; // e.g. jpeg, png
  const base64Data = match[3];
  const alt = match[4];
  const ext = mimeType === "png" ? "png" : "jpg";
  const filename = `image_v5_${index}.${ext}`;
  const filePath = path.join(outputDir, filename);

  const buffer = Buffer.from(base64Data, "base64");
  fs.writeFileSync(filePath, buffer);

  manifest.push({
    index,
    filename,
    path: `/images/${filename}`,
    alt,
    mimeType,
    size: buffer.length,
  });

  console.log(`Saved ${filename} (${buffer.length} bytes) - Alt: "${alt}"`);
  index++;
}

fs.writeFileSync(
  path.join(__dirname, "v5_manifest.json"),
  JSON.stringify(manifest, null, 2)
);

console.log(`\nSuccessfully extracted ${manifest.length} images from v5!`);
