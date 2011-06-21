# A Library of IP functions for Node.
      
  Yes. That is what this is.

     ipl=require('node-ip-lib');

     ipAddr = new ipl.ip('192.168.0.1'); // This has an implied CIDR of 32.

     // All of the following are Identical.
     ipAddr = new ipl.ip('192.168.6.1',24); // CIDR of 24.
     ipAddr = new ipl.ip('192.168.6.1','255.255.255.0'); // CIDR of 24, same as above.
     ipAddr = new ipl.ip('192.168.6.1',0x00FFFFFF); // CIDR of 24, same as above.
     ipAddr = new ipl.ip('192.168.6.1',16777215); // CIDR of 24, same as above.

     // All math functions have the same function signature, except "not"
     ipAddr.and(16); // gives: 192.168.0.0
     ipAddr.and('255.255.0.0'); // gives: 192.168.0.0
     ipAddr.and(65535); // gives: 192.168.0.0

     // or and xor also available with the same options.

     ipAddr.not(); // returns binary inverse of the address eg: "63.87.249.254"

## Installation

  Clone this repository into your node_modules directory.

  or

     $ npm install node-ip-lib


## Features

  * Simple Math style functions on IP addresses.

## TODO
  * Write tests.
  * Add more stuff. 

If you have something that should go here, write it, and I'll include it. Or, spark the idea for me to write it.

## License

(The MIT License)

Copyright (c) 2011 Brandon Myers <trakkasure@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

