fs = require('fs')

readToPromise = function(file) {
    const fsPromises = require('fs').promises;
    return fsPromises.readFile(file);
}

readToPromise("a1.txt").then(x => console.log("Contents: ", x)).catch(x => console.log("Error: ", x));
readToPromise("notfound.txt").then(x => console.log("Contents: ", x)).catch(x => console.log("Error: ", x));
