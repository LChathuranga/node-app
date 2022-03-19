const path = require('path')

console.log(path.sep);

const filePath = path.join('content', 'lahiru', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absPath = path.resolve(__dirname, 'content', 'lahiru')
console.log(absPath);