fs = require('fs')

asyncToFuture = function(f) {
    
    readIntoFuture = function(filename) {
        let variable = {isDone : false, result : null};
        
        f(filename, (err, data) => {
            if (err) {
                throw data;
            }
            else {
                variable.result = data;
                variable.isDone = true;
            }
        })
        return variable;
    }

    return readIntoFuture;
}

console.log('a: ')
readIntoFuture2 = asyncToFuture(fs.readFile);
future2 = readIntoFuture2('a1.txt')
setTimeout(function() { console.log(future2) }, 1000)

setTimeout(function() { console.log('b:') }, 1000)
statIntoFuture = asyncToFuture(fs.stat);
future2 = statIntoFuture('a1.txt')
setTimeout(function() { console.log(future2) }, 1000)
