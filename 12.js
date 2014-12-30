function Point(){
	var x = 0;
	var y = 0;

	this.getX = function(){return x;}
	this.getY = function(){return y;}
	this.set = function(i_x, i_y){x = i_x, y = i_y;}
}

var pt = new Point();
pt.set(100, 200);
console.log(pt.getX() + ' ' + pt.getY());
