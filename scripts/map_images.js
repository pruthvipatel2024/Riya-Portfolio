const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('d:/Riya/riya-jethva-portfolio (3).html', 'utf8');

// Find all <img ...> tags and print surrounding html snippet
const imgMatches = [...content.matchAll(/<img[^>]+>/gi)];

imgMatches.forEach((m, idx) => {
  const start = Math.max(0, m.index - 100);
  const end = Math.min(content.length, m.index + m[0].length + 100);
  const snippet = content.slice(start, end).replace(/data:image\/[^;]+;base64,[a-zA-Z0-9+/=]+/g, `IMAGE_${idx + 1}`);
  console.log(`=== Image ${idx + 1} ===`);
  console.log(snippet.trim());
  console.log('\n');
});
