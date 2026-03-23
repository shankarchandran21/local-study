// console.log(this)

// function testThis() {
//     console.log(this)// regular function showing global this
// }

// const arrowFunctionThis = () => {
//     console.log(this) // arrow function showing global this
// }

// // testThis()
// // arrowFunctionThis()

// const obj = {
//     name: "My Object",
//     showThis: function() {
//         console.log(this) // regular function showing object  created obj
//     }
// }

// const anotherObj = {
//     name: "Another Object",
//     arrowShowThis: () => {  
//         console.log(this) // arrow function showing global this in an object
//     }
// }

// // obj.showThis()
// // anotherObj.arrowShowThis()

// function outter () {
//     console.log(this) // regular function showing global this
//     function inner() {
//         console.log(this) // regular function showing global this
//     }
//     inner()
// }

// outter()

// const outterArrow = () => {
//     console.log(this) // arrow function showing global this
//     const innerArrow = () => {
//         console.log(this) // arrow function showing global this
//     }
//     innerArrow()
// }
// outterArrow()


// const callBackFunction = (fun)=>{
//     return fun()
// }

// callBackFunction(function() {
//     console.log(this) // regular function showing global this in callback function
// })

// callBackFunction( () => {
//     console.log(this) // arrow function showing global this in callback function
// })

// setTimeout(function() {
//     console.log(this) // regular function showing global this in setTimeout
// }, 1000)

// setTimeout( () => {
//     console.log(this) // arrow function showing global this in setTimeout
// }, 1000)

// function Person(name) {
    
//     setTimeout( () => {
//         console.log(this) // arrow function showing the instance of Person
//         console.log(`Hello, my name is ${this.name}`)
//     }, 1000)
// }

// Person("John")


class Person {
    constructor(name='shankar') {
        this.name = name

    }
}

class Student extends Person {
    constructor(name, age) {
        super(name)
        this.age = age
}
}

const student1 = new Student('MT066', 25)
console.log(student1)