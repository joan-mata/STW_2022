var o2 = (function() {
    var _count = 1;
    var _notify = null;
    return {
        inc : function() {
            _count++;
            if (_notify instanceof Function) {
                _notify(_count);
            }
        },
        count : function() { return _count; },
        setNotify : function(a) { _notify = a; }
    };
})();

o2.setNotify(function(a) { console.log(a) })
o2.inc()

