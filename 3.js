function repeat_call(n,f)
{
	for(var i =0;i<n;i++)
		f(i);
}

repeat_call(10, function(x){console.log('hello'+x)});
