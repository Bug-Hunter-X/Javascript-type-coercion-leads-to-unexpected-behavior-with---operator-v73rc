function foo(a,b){return a+b;}console.log(foo(1, "2")); //output: 12
This is because in javascript, the + operator will perform string concatenation if one of the operands is a string.  In this case, the number 1 is converted to a string and then concatenated with the string "2". To fix this you should make sure both a and b are numbers before performing the addition operation. 