oi = {
    count : 0,
    inc : function() {
        oi.count++;
        if (oi.notify instanceof Function) {
            oi.notify(oi.count);
        }
    },
    notify : null,
};

oi.count = 1;
oi.notify = function(a) { console.log(a) }
//oi.notify = null
oi.inc()
