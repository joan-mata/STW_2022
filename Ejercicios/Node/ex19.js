fs = require('fs')
0
function when(f1) {
    return {
        do : function(f2) {
            f1(f2)
        }
    }
}

//when = function(a) { return { do : function(f2) { f1(f2) }}}

f1 = function(callback) { fs.readFile('a1.txt', 'utf-8', callback) }
f2 = function(error, result) { console.log(result) }
when(f1).do(f2)
