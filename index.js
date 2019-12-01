const fs = require('fs');

// sync or bloking file reading or writing
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

const textOut = `This is what we know about avocado: ${textIn}}`;
fs.writeFileSync('./txt/output.txt', textOut);

// async or non-bloking file reading or writing
