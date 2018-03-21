// Psuedo code demonstrating Node event loop 

// node myFile.js 

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

// Helper function returns true if anything pending
function shouldContinue() {
  // Check one: pending setTimeout, setInterval, setImmediate?
  // Check two: pending OS tasks?
  // Check three: pending long-running operations? 
  return pendTimers.length || pendingOSTasks.length || pendingOperations.length;
  
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
  // 1) Node looks at pendingTimers; Calls functions that are ready
  
  // 2) Node looks at pendingOSTasks and pendingOperations; Calls specified callbacks
  
  // 3) Pause execution. Continue when... 
  //  - new pendingOSTask is done
  //  - new pendingOperation is done
  //  - a timer is about to complete 
  
  // 4) Look at pendingTimers. Call any setImmediate
  
  // 5) Handle any 'close' events 
  
}


// Exit back to terminal 
