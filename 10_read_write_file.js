const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/new/first.txt', 'utf8')
const second = readFileSync('./content/new/second.txt', 'utf8')

console.log(first, second);

writeFileSync('./content/new/third.txt', `Here is the result : ${first}, ${second}`)

// for append file

writeFileSync('./content/new/four.txt', `append the txt`, {flag: 'a'})