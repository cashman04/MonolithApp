const http = require('http');
const fibonacciWorker = require('./fibo-worker');

const port = 8000;

http
  .createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log('Incoming request to:', url.pathname);

    if (url.pathname === '/fibo') {
      const n = Number(url.searchParams.get('n'));
      console.log('Calculating fibonacci for', n);
      const result = await fibonacciWorker(n);
      res.writeHead(200);
      return res.end(`Result: ${result}\n`);
    } else if (req.url == '/health') {
    res.end("Healthy"); 
	console.log("Request receieve at /health");
	} else {
      res.writeHead(200);
      return res.end('Hello World!');
    }
  })
  .listen(port, () => console.log(`Listening on port ${port}...`));