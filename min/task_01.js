//The task:
//Wright a program that checks and displays wether number written to variable(prompt) is even or odd

var x = prompt ('enter any number', '');

var result = (x%2 == 0) ? 'Number ' + x + ' is even' : 'Number ' + x + ' is odd';

alert (result);