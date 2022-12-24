asyncComposer = function(f1, f2) {
    f3 = function(data, callback){
        return f2(data, function(err, f) {
            if(!err) {
                f1(f, callback)
            } else {
                callback(err)
            }
        })
    }
    return f3
}

f1 = function(a, callback) { callback(null, a + 1) }
f3 = asyncComposer(f1, f1)
f3(3, function(error, result) { console.log(result) } )

f1 = function(a, callback) { callback(null, a + 1) }
f2 = function(a, callback) { callback("error", "") }
f3 = asyncComposer(f1, f2)
f3(3, function(error, result) { console.log(error, result) } )

