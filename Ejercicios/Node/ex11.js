fs = require('fs')

asyncMap = function(llist, f, callback2) {
    var result = []
    var callback = function(err, data) {
        if (err) {throw data}
        else {result.push(data)}

        if (result.length == llist.length) {
            callback2(err, result)
        }
    }
    llist.forEach(filename => f(filename, 'utf-8',  callback))
}

asyncMap(['a1.txt'], fs.readFile, function(a,b) { console.log(b) })
