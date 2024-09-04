/*
Javscript is a synchronous language. It means : 
1. Single threaded : JS runs on a single thread, meaning it can only 
    execute one task at a time.

2. Execution Order : Tasks are executed line by line, in the order they
    appear in the code.

3. Blocking : If one task takes a long time (like a heavy calculation),
    it can block the next task from starting until it's done.

To handle tasks that take time (eg. network requests), JS uses
asynchronous mechanisms like callbacks, promises, and async/await.
This synchronous behavior is foundational, but async solutions are 
available for better performance in certain scenarios.


Now, since we have discussed that JS is single threaded, then it implies
that it is a slow language and that it's execution must be choking several
times. Well, that implication is correct but the thing is, we rarely find
vanilla JS and most of the time we find & use JS with some runtime environment
(can be of browser, NodeJS etc.).

So far we have been discussing wrt Default / Vanilla JS. 

Now, moving beyond the basics, let's discuss Execution Context.

In short, global execution context or simply execution context means 
that each operation waits for the last one to complete before executing.
Some key points : 
-> execute one line of code at a time

We have discussed Execution Context in quite details under 
"03_basics/JScodeExecute.png"

*********************
Blocking Code
*********************
- Blocks the flow of program --> Read File Sync

One of the simplest example of a blocking code is that of a program 
reading a file. Now, we know that the program cannot directly read the
files. For that to happen, it must first give context to the kernel, which 
would then read the intended file. After this, the data is then transferred
to the program from the kernel.

The issue arises as the kernel is constantly at work. So, it prioritizes the
ongoing task before the read instruction / request provided by the program. Hence,
until the kernel does not completes the ongoing task and then complete the query
the program asked, the program has no other option but to wait for the 
operation to complete. This now becomes a case of a blocking code.

**********************
Non - Blocking Code
**********************
- Does not blocks the execution --> Read File Async

Now, taking the above example of file upload (in case of blocking code),
in asynchronous method, the kernel would allow the program to continue it's
other operation while it handles the request. Once the request has been completed,
it would then notify the program about the same.

Now, many would be wondering that the Non-Blocking Code is a better approach
and must be preferred over the Blocking Code. The issue with this assumption is,
suppose, there is a webpage which allows for anyone to upload a file. Now, in case
of Non-Blocking code, even if the upload may not been completed, the program would 
return the message of "Successfully uploaded", which is wrong.

Here a blocking code or synchronous approach makes sense as it is more reliable and
secure. 
So, the approach taken always depends on the use case.

Now, we will look at a diagram which would explain how these tasks are 
able to execute in the first place. Refer : asyncNotes.png

Rememeber : In asyncNotes.png, we can also say Web API as Node since
Node is alternate for Web API. Web API kind of represents browsers here,
while Node represents backend and non-browser alternative. 

Now, if we take Node in place of Web API in the provided diagram,
we can say that in case of Node, it will not have access of DOM API whic
is available only to Web API.

We can also notice that Promise has its own queue. It is of higher priority
and it can be called promise queue or high prority queue.

*/