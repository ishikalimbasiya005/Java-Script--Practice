// Javascript is a single-threaded language, meaning it can only execute one piece of code at a time.

// Jvascript is synchronous by default, meaning it executes code in the order it appears.
console.log("Start");  
console.log("process");
console.log("End");



// +++++++++++++++++++++++++  Two type of Blocking Code :---------------------

// 1. Blocking Code: Code that prevents the execution of subsequent code until it is completed. 
// -----> Read file Synchronously

// 2. Non-blocking Code: Code that allows subsequent code to run without waiting for the current code to complete.
// -----> Read file Asynchronously


    // ++++++++++++++++++++++++++++++++++ Working Proceess ++++++++++++++++++++++++++++++++++++++++

    // JS ENGINE -> CALL STACK -> WEB APIs (1] Set TimeOut OR 2] Set Interval) -> TASK QUEUE -> EVENT LOOP
                                            //    |
                             //  Registered Callbacks -> task Queue -> Event Loop