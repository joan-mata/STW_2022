fs = require('fs')

readIntoFuture = function(filename) {
    var variable = {isDone : false, result : null};
    /*
    var callback = function(err, data) {
        if (err) {
            throw err;
        }
        else {
            variable.isDone = data;
            variable.result = true;
        }
    }*/
    fs.readFile(filename, 'utf-8', (err, data) => {
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



console.log('a: ')
future = readIntoFuture('a1.txt')
console.log(future)

console.log('b: ')
future = readIntoFuture('a1.txt')
setTimeout(function() { console.log(future) }, 1000)
