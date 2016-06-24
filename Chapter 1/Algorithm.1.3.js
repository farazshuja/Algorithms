//FIFO Queue
var Queue = function(){
    var N = 0;
    var first = null;
    var last = null;
    
    var Node = function(item) {
        this.item = item;
        this.next = null;
    }
    
    this.enqueue = function(item) {
        var oldLast = last;
        last = new Node(item);
        if(oldLast) {
            oldLast.next = last;
        }
        N++;
        if(N == 1) {
            first = last;
        }
    }
    
    this.dequeue = function() {
        if(N == 0) {
            return null;
        }
        var item = first.item;
        first = first.next;
        N--;
        if(N == 0) {
            first = null;
            last = null;
        }
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
    var q = new Queue();
    var data = d.toString().split(' ');
    var c = data.length;
    var output = '';
    for(var i=0;i<c; i++) {
        var _d = data[i];
        if(_d != '-') {
            q.enqueue(_d);
        }
        else if(!q.isEmpty()) {
            output += q.dequeue() + ' ';
        }
    }
    console.log(output + '(' + q.size() + ' left on queue)');
});


