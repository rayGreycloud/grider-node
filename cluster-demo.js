const cluster = require('cluster');
const express = require('express');

// Master mode? 
if (cluster.isMaster) {
  // Create child mode instance
  cluster.fork();
  cluster.fork();
  
} else {
  // If child, act like server
  const app = express();
  const port = 3000;
  
  app.get('/', (req, res) => {
    res.send('Ding!');  
  });
  
  app.get('/fast', (req, res) => {
    res.send(`Ding! I'm fast!`);  
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });  
}
