const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content-Type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, this is my server!\n');

    // Log your name to the console
    console.log('Your Name is Ruma');
});

// Make the server listen on port 4000
server.listen(4000, () => {
    console.log('Server is running on port 4000');
});



