https://www.npmjs.com/package/loadtest


node index.js

loadtest -n 100 -c 100 http://localhost:3000/fibonacci?n=46



[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Target URL:          http://localhost:3000/fibonacci?n=46
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Max requests:        100
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Concurrency level:   100
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Agent:               none
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Completed requests:  100
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Total errors:        0
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Total time:          135.12635440000003 s
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Requests per second: 1
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Mean latency:        91156.4 ms
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO Percentage of the requests served within a certain time
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO   50%      96431 ms
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO   90%      131079 ms
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO   95%      133418 ms
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO   99%      135092 ms
[Thu Apr 07 2022 21:15:43 GMT-0500 (Central Daylight Time)] INFO  100%      135092 ms (longest request)