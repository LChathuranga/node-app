const { createReadStream} = require('fs')
const stream = createReadStream('./content/new/big.txt', {
    highWaterMark: 9000,
    encoding: 'utf8',
})


//buffer size - highWaterMark
//encode - encoding


stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})