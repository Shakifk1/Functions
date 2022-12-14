// q1 sol
console.log("sol1")
function nopara(){
    console.log("hello")
}
nopara();
//ans:- hello
// q2 sol
console.log("sol2")
const sum=(a,b)=>{
return a+b;
}
const sumOfTwo=sum(3,4)
console.log(sumOfTwo);
//ans:-7

// q3 sol
console.log("sol3")
const Arrowfun=()=>{
    console.log("Arrow function.")
}
Arrowfun();
//ans:-arrow function
// q4 sol
console.log("sol4")
var x=21
var girl1=function girl1(){
    console.log(x)
    var x=20;
};
girl1();
//ans:- undefined


// q5 sol
console.log("sol5")
var x=21
girl();
console.log(x);
function girl(){
    console.log(x)
    var x=20;
}
//ans:- undefined and 21

// q6 sol
console.log("sol6")
var x =21;
a();
b();
function a(){
    x=20;
    console.log(x);
};
//ans:- 20
function b(){
    x=40;
    console.log(x);
};
//ans:- 40

// q7 sol factorial
console.log("sol7")
function factorial(n){
    
    var count=1;
for(let i=n; i>0;i--){
    count *= i;
}
return count;
}
const facto=factorial(5);
console.log(facto)
//ans:- 120


