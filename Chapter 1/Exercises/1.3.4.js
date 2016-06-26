/**
* Usage: 
* node 1.3.4.js [Press Enter]
* [Type the parentheseis stucture and Press Enter]
* Ctrl+C to exit
**/
var Stack = require('./Stack.js');


var stdin = process.openStdin();
stdin.addListener('data', function(d) {
    var s = new Stack();
    var str = d.toString();
    var data = str.substr(0, str.length-1); //remove the last character if input as its new line character
    var c = data.length;
    var output = '';
    var isValid = true;    
    for(var i=0;i<c; i++) {
        var _d = data[i];
        if(_d == '[' || _d == '{' || _d == '(') {
            s.push(_d);
        }
        else {
            var item = s.pop();                        
            if(item == '[' && _d != ']') {
                isValid = false;
            }
            else if(item == '{' && _d != '}') {
                isValid = false;
            }
            else if(item == '(' && _d != ')') {
                isValid = false;
            }
            
        }
    }
    console.log('Parenthesis are ' + (isValid ? 'Valid' : 'Invalid'));
});


