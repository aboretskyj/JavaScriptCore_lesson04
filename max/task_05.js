//The task:
//Three variables a, b and c have three numbers written. 
//Create a program that will find and display 
//the roots of the square equation ax2 + bx + c = 0, 
//or report that there is no root.

var a = prompt ('enter the variable a', '');
var b = prompt ('enter the variable b', '');
var c = prompt ('enter the variable c', '');
var x1
var x2

var d = Math.pow (b, 2) - 4 * a * c;
console.log(d);
console.log(Math.sqrt(d));
console.log(-b - Math.sqrt(d));


if (d < 0) {
    alert('The equation has no roots');
} else if (d == 0) {
    x1 = -b/(2*a);
    alert('The equation has one root: x = ' + x1);
} else {
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    alert('The equation has two roots:\nx1 = ' + x1 + '; x2 = ' + x2);
}
