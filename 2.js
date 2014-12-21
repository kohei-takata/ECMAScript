var s = new String('Hello');
var t;
with(s){
	t=toUpperCase();
}
console.log(t);
