const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('homepage')
    }
    if(req.url === '/about'){
        res.end('about')
    }
})

server.listen(3000)