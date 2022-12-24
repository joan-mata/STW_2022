functionPromiseComposer = function(fa, fb){
    return function(param){
        let a,b;
        p = new Promise((resolve, reject) =>{
            a = resolve;
            b = reject;
        })
        p = fb(param).then(x=>fa(x))
        return p
    }
}
var f1 = x => new Promise((resolve, reject) => resolve(x + 1));
functionPromiseComposer(f1, f1)(3).then(console.log);
var f2 = x => new Promise((resolve, reject) => reject('always fails'));
functionPromiseComposer(f1, f2)(3).catch(console.log);
var f3 = x => new Promise((resolve, reject) => setTimeout(() => resolve(x * 2), 500));
functionPromiseComposer(f1, f3)(3).then(console.log);
