const fs = require('fs');

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

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
});
console.log('top level');
