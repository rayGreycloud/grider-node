const express = require('express');
const { Worker } = require('webworker-threads');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Create new worker interface
  const worker = new Worker(function () {
    // worker thread method
    this.onmessage = function () {
      // Pseudo work 
      let counter = 0;
      while (counter < 1e9) { counter++ };
    
      // worker returns results to interface
      postMessage(counter);
    };
  
  });
  // Set interface onmessage method
  worker.onmessage = function (message) {
    console.log(message.data);
    res.send(`Result: ${message.data}`);
  }
  // Call interface postMessage
  worker.postMessage();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});  
