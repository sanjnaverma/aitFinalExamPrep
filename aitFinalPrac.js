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
num.foreach(function(ele){
	console.log(ele);
});
