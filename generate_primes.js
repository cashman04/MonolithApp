process.on("message", (msg) => {
  "use strict";
  process.send({value: primes(parseInt(msg.num)),event:msg.event})
});

function primes(n) { // 1
  var arr = [];
    for (var n = 2; n <= 100000000; n++) {
        var primeTrue = true;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                primeTrue = false;
            }
        }
        if (primeTrue) {
            arr.push(n);
        }
    }
    return arr.toString();
}