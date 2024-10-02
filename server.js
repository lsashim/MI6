const http = require('http');

// Create the web server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set HTTP status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set response content type
    res.end('Hello MI6. This is my second commit\n'); // Send response message
});

// Define the port and hostname (localhost)
const port = 3000;
const hostname = '0.0.0.0'; // Listen on all interfaces

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
