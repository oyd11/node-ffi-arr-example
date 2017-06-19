

#### Minimal example project usage of Node.js ffi (Foreign Function Interface) - passing arrays to C interface:

Supported: Linux/OSX

Usage:
```
npm install
make  
node callc.js
```

This compiles a test C++ library, from `cArr.cc` (with an `external "C"` interface), and uses the exported functions from `callc.js`

Basically - an example of using :
 * https://github.com/node-ffi/node-ffi
 * https://github.com/TooTallNate/ref-array
