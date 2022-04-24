const http = require('http');
const fibonacciWorker = require('./fibo-worker');

const port = 8000;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


http
  .createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log('Incoming request to:', url.pathname);
    if (url.pathname === '/fibo1') {
      // any fibo
      const n = randomInteger(10,20)
      console.log('Calculating fibonacci for', n);
      const result = await fibonacciWorker(n);
      res.writeHead(200);
      return res.end("Generated Fibonacci to: " + n + "\nResult: " + result);
    } else if (req.url == '/fibo2') {
      // slower
      const n = randomInteger(21,30)
      console.log('Calculating fibonacci for', n);
      const result = await fibonacciWorker(n);
      res.writeHead(200);
      return res.end("Generated Fibonacci to: " + n + "\nResult: " + result);
    } else if (req.url == '/fibo3') {
      //slow
      const n = randomInteger(31,43)
      console.log('Calculating fibonacci for', n);
      const result = await fibonacciWorker(n);
      res.writeHead(200);
      return res.end("Generated Fibonacci to: " + n + "\nResult: " + result);
    }  else {
      console.log(req.url);
      res.writeHead(200);
      return res.end('Hello World!');
    }
  })
  .listen(port, () => console.log(`Listening on port ${port}...`));