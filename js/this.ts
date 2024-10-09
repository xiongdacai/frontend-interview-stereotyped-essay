/**
 * global this
 */
function f1(){
    console.log(this);
}

function f2(){
    'use strict';
    console.log(this);
}
f1(); // window/global
f2(); // undefined

const foo={
    bar:10,
    fn:function(){
        console.log(this);
        console.log(this.bar);
    }
}
foo.fn(); // { bar: 10, fn: [Function: fn] } \n 10

const f3=foo.fn;
f3(); // window/global /n undefined !!!!!

// conclusion:If the function of 'this' is called by its object,then the 'this' is pointed at the object,or pointed by the golbal environment.

/**
 * context this
 */
const student={
    name:'Lucas',
    fn:function(){
        return this;
    }
}
console.log(student.fn()===student); // true

const person={
    name:'Lucas',
    brother:{
        name:'Mike',
        fn:function(){
            return this.name;
        }
    }
}
console.log(person.brother.fn()); // Mike

const o1={
    text:'o1',
    fn:function(){
        return this.text;
    }
}

const o2={
    text:'o2',
    fn:function(){
        return o1.fn();
    }
}

const o3={
    text:'o3',
    fn:function(){
        var fn=o1.fn;
        return fn();
    }
}

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1:because it actually call o1.fn()
console.log(o3.fn()); // undefined: the 'this' is pointed at window but why not o3?

/**
 * Arrow function this
 */
const foo2={
    fn:function(){
        setTimeout(function(){
            console.log(this);
        });
        setTimeout(()=>{
            console.log(this===foo2);
        })
    }
}
console.log(foo2.fn()); // global \n true