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

var o3 = new Counter();
o3.setNotify(function(a) { console.log(a) })
o3.inc()

