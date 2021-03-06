function reduce(arr, combine, start) {
  var accum = start;
  arr.forEach(function(ele){
    accum = combine(accum, ele); 
  }); 
  return accum;
}

console.log(reduce([4, 12, 5], function(accum, ele) {
  return accum + ele;  
}, 0));

var reduce2 = function(arr, accum, func){
	arr.forEach(function(ele){
		accum = func(ele, accum);
	});
	return accum;
};

console.log(reduce2([4, 12, 5], 0, function(accum, ele) {
  return accum + ele;  
}));

var foreach = function(arr, f){
	var i; 
	for(i = 0; i < arr.length; i++){
		f(arr[i]);
	}

};

var num = [3, 4, 5];
/*num.foreach(function(ele){
	console.log(ele);
});

This runs an error:
num.foreach(function(ele){
    ^
TypeError: undefined is not a function
    at Object.<anonymous> (/Users/sanjnaverma/Desktop/aitFinalPrac.js:33:5)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)
    at node.js:814:3

Will figure this out later
*/

