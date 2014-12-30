var x = (function(a, b){
		return (a==0?b:arguments.callee(b%a,a));
	})(22,121);
console.log(x);
