// Multitask example to demonstrate crazy node behavior

// Import modules 
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

// Start timer
const start = Date.now();

// The OS task - HTTP request (doesn't use threadpool)
function doRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log('HTTPS:', Date.now() - start);
      });
    })
    .end();
}

// The Operations task - crypto hashing
function doHash(num) {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`Hash: ${num}`, Date.now() - start);
  });
}

// Multi-task calls 
// Make Request 
doRequest();

// Attempt to read file contents 
fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS:', Date.now() - start);
});

// Calculate 4 hashes 
doHash(1);
doHash(2);
doHash(3);
doHash(4);

// What order for console.logs of different tasks? 
// HTML - first because doesn't use thread pool 
// Hash - completed next  
// FS - follows the first hash because requires 2 HD requests
// Hash 
// Hash 
// Hash 

// Results: one of hash calls (changes each run) is processed while FS call waits
// Then FS finishes 2nd immediately after, followed by remaining hash Calls

