/**
* Usage: 
* node 1.3.9.js < paranthesis.txt
**/
var Stack = require('./Stack.js');


var stdin = process.openStdin();
stdin.addListener('data', function(d) {
    var s = new Stack();
    var str = d.toString();
    var data = str.split(' ');
    var c = data.length;
    
    for(var i=0;i<c; i++) {
        var _d = data[i];              
        if(_d == ')') {
            //pop 3 times
            var str = _d;
            for(var j=0;j<3;j++) {
                str = s.pop() + ' ' + str;                
            };
            str = '( ' + str;            
            s.push(str);
        }
        else {            
            s.push(_d);
            
        }
    }
    console.log('Fixed parantheses: ' + s.pop());
});