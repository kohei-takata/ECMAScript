function map(arr, f){
	var newArr = new Array(arr.length);
	for(var i=0;i<arr.length;++i)
		newArr[i] = f(arr[i]);
	return newArr;
}

function mem_fn(mf){
	return function(obj){
		var args = new Array(arguments.length - 1);
		for(var i=1;i<arguments.length;++i)
			args[i-1] = arguments[i];
		return mf.apply(obj, args);
	};
}

x = map(
	['hoge', 'fuga', 'jagyo'],
	mem_fn(String.prototype.toUpperCase)
	);
map(x, console.log);
