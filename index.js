const fs = require('fs');
const superagent = require('superagent');

// sync or bloking file reading or writing
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// const textOut = `This is what we know about avocado: ${textIn}}`;
// fs.writeFileSync('./txt/output.txt', textOut);

// // async or non-bloking file reading or writing
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('could not reach the start file');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('done successfully');
//       });
//     });
//   });
// });

// setTimeout(() => console.log('Timer 1 finished'), 0);
// setImmediate(() => console.log('Immediate 1 finished'));

// fs.readFile('test-file.txt', () => {
//   console.log('I/O finished');
// });
// console.log('top level');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`breed: ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) {
//         console.log('fetching err', err.message);
//       }
//       //   console.log(res.body.message);
//       fs.writeFile('dog-img.txt', res.body.message, err => {
//         console.log('image done');
//         if (err) {
//           console.log('image err', err);
//         }
//       });
//     });
// });

// const readFilePro = file => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find file');
//       resolve(data);
//     });
//   });
// };
// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, err => {
//       if (err) reject('I could not write file');
//       resolve('success');
//     });
//   });
// };

// readFilePro(`${__dirname}/dog.txt`)
//   .then(data => {
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(res => {
//     console.log(res.body.message);

//     writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then(res => {
//     console.log('random dog saved');
//   })
//   .catch(err => {
//     if (err) {
//       console.log(err.message);
//     }
//   });

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`breed: ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res => {
//       if (err) {
//         console.log('fetching err', err.message);
//       }
//       //   console.log(res.body.message);
//       fs.writeFile('dog-img.txt', res.body.message, err => {
//         console.log('image done');
//         if (err) {
//           console.log('image err', err);
//         }
//       });
//     })
//     .catch(err => console.log('fetching err', err.message));
// });
