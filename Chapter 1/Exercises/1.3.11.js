/**
* Usage: 
* node 1.3.11.js
* [Press Enter]
* ABC+*D/
* [Press Enter]
* output: A * ( B + C ) / D
**/
var Stack = require('./Stack.js');


var stdin = process.openStdin();
stdin.addListener('data', function(d) {
    var s = new Stack();
    var precedence = [];
    precedence['('] = 0;
    precedence[')'] = 0;
    precedence['+'] = 1;
    precedence['-'] = 1;
    precedence['*'] = 2;
    precedence['/'] = 2;
    
    var str = d.toString().trim();
    var data = str.split(' ');
    var c = data.length;
    
    var output = '';
    var lastOperand = null;
    for(var i=0;i<c; i++) {
        var token = data[i];
        var eq = '';
        
        if(isOperand(token)) {
            if(lastOperand && precedence[lastOperand] < precedence[token]) {
                var addPrenthesis = '( ' + s.pop() + ' )';
                s.push(addPrenthesis);
            }
            //size must be > 2 in stack
            eq = token + ' ' + s.pop();
            eq = s.pop() + ' ' + eq;
            s.push(eq);
            lastOperand = token;
        }
        else {
            s.push(token);
            lastOperand = null;
        }
    }
    console.log('Infix: ' + s.pop());
});

function isOperand(o) {
    return o == ')' || o == '(' || o == '*' || o == '/' || o == '+' || o == '-';
}