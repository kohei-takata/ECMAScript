function add(x, y){
	return x + y;
}
console.log(add.apply(null, [10, 20]));
