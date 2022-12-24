composer = function(f1, f2) {
    f = function(x){
        return f1(f2(x))
    }
    return f
}

f1 = function(a) { return a + 1 }
f3 = composer(f1, f1)
console.log(f3(3))

f4 = function(a) { return a * 3 }
f5 = composer(f3, f4)
console.log(f5(3))

