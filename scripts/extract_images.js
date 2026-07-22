const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../riya-jethva-portfolio (3).html');
const outDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const content = fs.readFileSync(htmlPath, 'utf8');

// Regex to find src="data:image/(png|jpeg|jpg|webp|gif);base64,..."
const imgRegex = /src=["'](data:image\/([a-zA-Z0-9]+);base64,([^"']+))["']/g;

let match;
let count = 0;
const imagesFound = [];

while ((match = imgRegex.exec(content)) !== null) {
  count++;
  const mimeType = match[2]; // png, jpeg, etc.
  const ext = mimeType === 'jpeg' ? 'jpg' : mimeType;
  const base64Data = match[3];
  const buffer = Buffer.from(base64Data, 'base64');
  
  const filename = `image_${count}.${ext}`;
  const outPath = path.join(outDir, filename);
  fs.writeFileSync(outPath, buffer);
  
  imagesFound.push({
    index: count,
    ext,
    size: buffer.length,
    filename,
    path: `/images/${filename}`
  });
  console.log(`Saved ${filename} (${buffer.length} bytes)`);
}

console.log(`Total extracted images: ${imagesFound.length}`);
fs.writeFileSync(path.join(__dirname, 'extracted_manifest.json'), JSON.stringify(imagesFound, null, 2));
