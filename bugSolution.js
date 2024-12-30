function foo(a,b){
if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error("Both operands must be numbers");
}
return a+b;}
console.log(foo(1,2)); //output: 3
console.log(foo(1,"2")); // throws error: Both operands must be numbers