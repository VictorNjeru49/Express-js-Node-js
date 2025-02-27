const  fs = require('fs');
const {readFileSync, writeFileSync} = require('fs');


const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
const second = readFileSync ('./content/subfolder/second.txt', 'utf-8');

console.log(first, second);

writeFileSync(
    './content/subfolder/combined.txt',
    `here  is the results: ${first + '\n' + second}`,
    {flag: 'a'}
)