const cluster = require('cluster');
const express = require('express');

// Master mode? 
if (cluster.isMaster) {
  // Create child mode instance
  cluster.fork();
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  
} else {
  // If child, act like server
  const app = express();
  const port = 3000;
  
  // Pseudo work load 
  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {
      // Run whle loop until duration passes
    }
  }

  app.get('/', (req, res) => {
    doWork(4000);
    res.send('Ding!');  
  });
  
  app.get('/fast', (req, res) => {
    res.send(`Ding! I'm fast!`);  
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });  
}
