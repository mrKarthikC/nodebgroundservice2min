const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/content.txt');
let writeStream = fs.createWriteStream(__dirname + "/destination.txt");

readStream.on('readable', () => {
    let chunk;
    while (null !== (chunk = readStream.read(16384))) {
        console.log(`Received ${chunk.length} bytes of data.`);
        writeStream.write(chunk);
    }
});

readStream.on('error', function(err){
    console.log(err.stack);
});
console.log("Program Ended");