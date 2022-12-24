function Counter() {
    this.count = 1;
    this.notify = null;
    this.inc = function() {
        this.count++;
        if (this.notify instanceof Function) {
            this.notify(this.count);
        }
    };
    this.setNotify = function(a) { this.notify = a }
};

function DecreasingCounter(){
    this.inc = function() {
        this.count--;
        if (this.notify instanceof Function) {
            this.notify(this.count);
        }
    };
    this.setNotify = function(a) { this.notify = a }
};

DecreasingCounter.prototype = new Counter();
var o4 = new DecreasingCounter;
o4.setNotify(function(a) { console.log(a) })
o4.inc()

