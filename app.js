const http = require('http');
const fibonacciWorker = require('./fibo-worker');

const port = 8000;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


http
  .createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    //console.log('Incoming request to:', url.pathname);
    const firstPath = req.url.split("/")[1]
    const secondPath = req.url.split("/")[2]
    if (firstPath == 'fibo') {
      const n = parseInt(secondPath)
      if(Number.isInteger(n)) {
        const result = await fibonacciWorker(n);
        res.writeHead(200);
        return res.end(`Result: ${result}\n`);
      } else {
        res.writeHead(404);
        return res.end('Not Found');
      }
      
    } else {
      res.writeHead(200);
      return res.end('Hello World!');
    }
  })
  .listen(port, () => console.log(`Listening on port ${port}...`));