const argv = process.argv

console.log(argv)

// Example terminal command: node test.js action=boom  OR node app.js hello 123
/*  
output example:
[
  'C:\\Program Files\\nodejs\\node.exe',  // path to Node.js executable
  'C:\\Users\\MT066\\Desktop\\Study\\React\\documentation\\test.js', // path to your script
  'hello',                // first command line argument
  '123'                   // second command line argument
]

*/

[
  'C:\\Program Files\\nodejs\\node.exe',  // path to Node.js executable
  'C:\\Users\\MT066\\Desktop\\Study\\React\\documentation\\test.js', // path to your script
  'hello',                // first command line argument
  '123'                   // second command line argument
]



// obj reference in stack, actual object in heap
 let obj = {x: 10, y: 20}; 
 // arr reference in stack, array in heap
let arr = [1, 2, 3];      