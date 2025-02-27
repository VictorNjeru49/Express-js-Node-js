const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Welcome to our home page')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('This is our about page')
        res.end()
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 - Page Not Found')
        res.end()
    }
    res.end(
        console.log(`Server is running on port 5000`)
    )
});  

server.listen(5000)