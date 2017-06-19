
var ref = require('ref');
var ffi = require('ffi');
var ArrayType = require('ref-array');

var int = ref.types.int;
var float = ref.types.float;
var double = ref.types.double;
var IntArray = ArrayType(int);
var FloatArray = ArrayType(float);
var DoubleArray = ArrayType(double);


var test_lib = ffi.Library('test_lib', {
    'f': [ 'int', [ 'float', 'int' ] ],
    'arrFuncFloat': [ 'int', [ FloatArray, 'int' ] ],
    'arrFuncDouble': [ 'int', [ DoubleArray, 'int' ] ],
    'arrFuncInt': [ 'int', [ IntArray, 'int' ] ],
});

ret = test_lib.f(3.0, 10);

arr = [1.0, 10.0, 12.5 ];
ret = test_lib.arrFuncFloat(arr, arr.length);
console.log(ret)
ret = test_lib.arrFuncDouble(arr, arr.length);
console.log(ret)
ret = test_lib.arrFuncInt(arr, arr.length);
console.log(ret)

// ffi  / ref-array : wrapper doesn't work with "Float32Array" 
// and related type for now, just with 'generic array'
//arr2= new Float32Array([2.0, 10.9, 12.5 ]);
//ret = test_lib.arrFuncFloat(arr2, arr2.length);
//console.log(ret)

