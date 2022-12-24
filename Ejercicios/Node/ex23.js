pa = Promise.resolve(0).then(x => x + 1).then(x => x + 2).then(x => x + 4);
pa.then(x => console.log(x))

pb = Promise.reject(0).then(x => x + 1).catch(x => x + 2).then(x => x + 4);
pb.then(x => console.log(x))

pc = Promise.resolve(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x+ 8);
pc.then(x => console.log(x))

pd = Promise.reject(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x+ 8);
pd.then(x => console.log(x))

pe = Promise.reject(0).then(x => x + 1, null).catch(x => x + 2).catch(x => x + 4);
pe.then(x => console.log(x))
