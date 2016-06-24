//Pushdown stack (linked-list implementation)
var Stack = function(){
    var N = 0;
    var first = null;
    
    var Node = function(item) {
        this.item = item;
        this.next = null;
    }
    
    this.push = function(item) {
        var oldFirst = first;
        first = new Node(item);
        first.next = oldFirst;
        N++;
    }
    
    this.pop = function() {
        if(N == 0) {
            return null;
        }
        var item = first.item;
        first = first.next;
        N--;
        return item;
    }
    
    this.isEmpty = function() {
        return first == null;
    }
    this.size = function() {
        return N;
    }
};




var stdin = process.openStdin();
stdin.addListener('data', function(d) {
    var s = new Stack();
    var data = d.toString().split(' ');
    var c = data.length;
    var output = '';
    for(var i=0;i<c; i++) {
        var _d = data[i];
        if(_d != '-') {
            s.push(_d);
        }
        else if(!s.isEmpty()) {
            output += s.pop() + ' ';
        }
    }
    console.log(output + '(' + s.size() + ' left on stack)');
});


