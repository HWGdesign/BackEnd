const fs = require('fs');

// ! read fil
// fs.readFile('./docs/info.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log('last line');

//! write file
// fs.writeFile('./docs/info.txt', 'Hello world!', () => {
//   console.log('file was written successfully!');
// });

// fs.writeFile('./docs/info2.txt', 'Hello world!', () => {
//   console.log('file was created successfully!');
// });

// ! directions

// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('Folder created successfully!');
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });
// }

//! deleting files

// if (fs.existsSync('./docs/deleteMe.txt')) {
//   fs.unlink('./docs/deleteMe.txt', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('file deleted!');
//   });
// }
