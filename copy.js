/* const fs = require('fs');
const file = 'redac.mp4'
fs.stat(file, (err, stat) => {
    let total = stat.size;
    let progress = 0
    let read = fs.createReadStream(file)
    let write = fs.createWriteStream("redac.mp4");
    read.on('data', (chunk) => {
        progress += chunk.length;
        console.log('j\'ai lu ', Math.round(100 * progress / total) + "%");
    })
    read.pipe(write)
    write.on('finish', () => {
        console.log('J\'ai fini');
    })
}) */
let strspace = "", strCroix ="*",line ="", res ="";
for(let i =0; i < 8; i++){
strspace = " ".replace(8 - 1 - i);
strCroix = "*".repeat(i * 2 + 1);
res += strspace+ strCroix + '\n';
}
console.log(res);