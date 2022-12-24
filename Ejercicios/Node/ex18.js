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

readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
enhancedFuture = readIntoEnhancedFuture('a1.txt');
enhancedFuture.registerCallback( function(ef) { console.log(ef) } );

