var http = require('http')
var fs = require('fs')

http
.createServer(function(req, res) {
    const fileStream = fs.createReadStream('./content/new/big.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        console.log(err);
    })
})
.listen(5000)
