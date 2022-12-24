antipromise = function(p) {
    //return p.then(function(p){throw p}, x => x)
    return new Promise((resolve, reject)=>{
            p.then(reject, resolve)
    })
}

antipromise(Promise.reject(0)).then(console.log);

antipromise(Promise.resolve(0)).catch(console.log);
