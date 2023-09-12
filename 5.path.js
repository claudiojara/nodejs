const path = require('node:path')

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/lala/lala/sss/test.txt')
console.log(base)

const filename = path.basename('/lala/lala/sss/test.txt', '.txt')
console.log(filename)

const extension = path.extname('/lala/lala/sss/test.txt')
console.log(extension)
