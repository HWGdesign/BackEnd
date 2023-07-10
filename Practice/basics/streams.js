const fs = require('fs');

const readStream = fs.createReadStream('./docs/hugeText.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/hugeTextCreated.txt', { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//   console.log('\n________________________________\n');
//   console.log(chunk);
//   writeStream.write('\n ________________________________\n');
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);
