const fs = require('node:fs')
const pc = require('picocolors')

console.log('leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log(pc.red(err))
  console.log(text)
})

console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(pc.red(err))
  console.log(text)
})
