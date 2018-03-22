const https = require('https');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// Notice differing allocation of requests between threads/cores 
// OS specific (Windows 10 64-bit, I5-6600 4-core processor) 

// 1 request 
159

// 3 requests
156
156
156

// 4 requests
156
171
171
171

// 5 requests
156
156
156
171
171

// 7 requests
171
171
171
171
187
187
187
