const http = require("http");
const host = 'localhost';
const port = 8000;
const {fork} = require('child_process');
const child = fork(`${__dirname}/generate_primes.js`);
let {EventEmitter} = require('events');

let event = new EventEmitter();


const route1 = "a"
const route2 = "b"


const server = http.createServer(function(req, res){

  if (req.url == '/fibo') {
    let rand = Math.random() * 100;
    child.send({num:req.headers.fibo,event:rand});  //send the number to fibonacci_running
    event.once(rand, (value) => { //when the event is called
        res.end(`${value}`)
    })

  } else {
     let rand = Math.random() * 100;
      res.end('Your number is ' + rand);
  }
});


child.on("message",(msg)=> event.emit(msg.event,msg.value));
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});