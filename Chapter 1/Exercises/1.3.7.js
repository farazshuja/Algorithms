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
    
    this.peek = function() {
        if(first != null) {
            return first.item;
        }
    }
    
    this.isEmpty = function() {
        return first == null;
    }
    this.size = function() {
        return N;
    }
};