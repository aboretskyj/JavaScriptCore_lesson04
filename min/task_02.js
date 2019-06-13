//The task:
//Write a program that displays which of two numbers vritten to variables(prompt) is closer to 10

var x = prompt ('enter the first number', '');
var y = prompt ('enter the seccond number', '');

var result = (Math.abs(10 - x) == Math.abs(10 - y)) ? 'The distance is equal' :
(Math.abs(10 - x) < Math.abs(10 - y)) ? 'Number ' + x + ' is closer to 10' : 'Number ' + y + ' is closer to 10';

alert (result);