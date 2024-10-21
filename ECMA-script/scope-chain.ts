import { func } from "prop-types";

/**
 * test1
 */
var a='str';
(function a(){
	if(typeof a == 'undefined'){
		var a=1;
		console.log('111'+a);
	}else{
		console.log('222'+a);
	}
})()

/**
 * test2
 */
var b=2;
function b(){
	console.log(b);
	var b=3;
	console.log(b);
}
b();

/**
 * test3
 */

(function c(){
	console.log(c1);
	var c1=c2=1;
	console.log(c1);
})();
console.log(c2);

/**
 * test4
 */

function bar(){
	console.log(d);
}
function foo(){
	var d=100;
	bar();
}
var d=200;
foo();

/**
 * test5
 */
var globalVar='GlobalVariable';

function outerFunc(){
	var outerVar='OuterVariable';
	innerFunc();
}

function innerFunc(){
	var innerVar="InnerVariable";
	console.log(innerVar);
	console.log(outerVar);
	console.log(globalVar);
	
}
outerFunc();

/**
 * test6-1
 */

var name='lin22';
var obj={
	name:'lin11',
	fn:function(){
		var name="lin33";
		return function(){
			return this.name;
		}
	}
}
console.log(obj.fn()());

/**
 * test6-2
 */
var name='lin22';
var obj={
	name:'lin11',
	fn:function(){
		var name="lin33";
		return ()=>{
			return this.name;
		}
	}
}
console.log(obj.fn()());