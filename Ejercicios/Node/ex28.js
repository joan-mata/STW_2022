fs = require('fs')

asyncToEnhancedFuture = function(f) {
    
    f2 = function(filename) {
        var variable = {isDone : false, result : null, registerCallback : null};

        f(filename, (err, data) => {
            if (err) {
                throw data;
            }
            else {
                variable.result = data;
                variable.isDone = true;
            }
        })
        return {
            registerCallback : function(f3) {
                variable.registerCallback = f3
                f3(variable)
            }
        }
    }
    return f2
}

enhancedFutureToPromise = function(f4) {
    var x;
    p = new Promise((result, reject) => { x = result; })
    x(f4)
    return p
}

readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
var enhancedFuture = readIntoEnhancedFuture('a1.txt');
var promise = enhancedFutureToPromise(enhancedFuture);
promise.then(console.log)
