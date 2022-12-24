fs = require ('fs')
function when(f1) {
    return {
        and: function(f2) {
            return {
                do: function(f3) {
                    f1(function(err1, res1){
                        f2(function(err2, res2){
                            f3(err1, err2, res1, res2)
                        })
                
                    })
                }
            }
        }
    }
}


f1 = function(callback) { fs.readFile('a1.txt', 'utf-8', callback) }
f2 = function(callback) { fs.readFile('a2.txt', 'utf-8', callback) }
f3 = function(err1, err2, res1, res2) { console.log(res1, res2) }
when(f1).and(f2).do(f3)
