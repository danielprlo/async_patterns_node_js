# Async patterns in nodejs

# Event Loop
- The event loop checks the queue to execute the tasks waiting there.
- They will be executed synchronously

That's why JS allows also to run task asynchronously, putting them into a separate queue.
- This asynchronous tasks are callback funtions to be able to come back to our single thread execution 
so we can process the result.
  
There is a higher priority queue called Async Microtask Queue for the resolution of promises.
The only code that runs single threaded is the main JS code, the rest (Libraries like FS or network calls)
they run in C, which is multithreaded.
 




