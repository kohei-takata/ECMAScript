function Point(){
	this.x = 0;
	this.y = 0;
}

Point.prototype.distanceFromOrigin = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y);
}

var pt = new Point();
pt.x = 3;
pt.y = 4;

console.log(pt.distanceFromOrigin());
console.log(pt.constructor.name);
