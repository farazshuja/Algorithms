/**
* Usage: 
* node 1.3.10.js
* [Press Enter]
* A * ( B + C ) / D
* [Press Enter]
* output: ABC+*D/
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
    
    for(var i=0;i<c; i++) {
        var token = data[i];
        
        if(isOperand(token)) {
            var peek = s.peek();
            if(token == ')') {
                output += s.pop();
                s.pop();    //pop start bracket i.e. (
                continue;
            }
            var hasMorePrecedence = false;
            if(peek && token != '(') {
                hasMorePrecedence = precedence[peek] >= precedence[token];
            }
            if(hasMorePrecedence) {
                output += s.pop();
            }
            s.push(token);
        }
        else {
            output += token;
        }
    }
    while(s.size() > 0) {
        output += s.pop();
    }
    console.log('Postfix: ' + output);
});

function isOperand(o) {
    return o == ')' || o == '(' || o == '*' || o == '/' || o == '+' || o == '-';
}