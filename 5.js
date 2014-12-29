function f(x) {
	return x*x;
}

var n = f(1,2) + f(); //1 + NAN
console.log(n);
