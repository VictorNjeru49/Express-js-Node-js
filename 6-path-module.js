const path = require('path');

const filepath = path.join(__dirname, 'test', 'hello.html');
const basename = path.basename(filepath);
const absolute = path.resolve(__dirname, 'test', 'hello.html');

console.log(`Filepath: ${filepath}`);

console.log(`Basename: ${basename}`);

console.log(`Absolute path: ${absolute}`);