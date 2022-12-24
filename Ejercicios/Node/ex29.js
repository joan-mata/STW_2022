antipromise = function(p) {
    return new Promise((resolve, reject)=>{
            p.then(reject, resolve)
    })
}

mergedPromise = function(p){
    return p.then(x=>x, x => antipromise(p))
}

mergedPromise(Promise.resolve(0)).then(console.log);
mergedPromise(Promise.reject(1)).then(console.log);
