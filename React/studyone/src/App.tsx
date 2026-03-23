
import ClassComponentExample from './components/classComponents'
import Debouncing from './components/Debouncing'
import Product from './components/product'
import ReduxCounter from './components/ReduxCounter'
import Throttle from './components/Throttle'
import SimpleTodoComponent from './components/todo'
import "./dsa/array"
import "./dsa/string"

import { Route,  Routes } from "react-router-dom"
import "./dsa/patterns"
import ToDo from './features/ToDo'
import SimpleTodo from './featureTwo/SimpleTodo'
import ProgressBar from './components/ProgressBar'


function App() {

//  function pyramid(n=5){
//     for(let i = 1 ; i<=n;i++){
//         let space = " ".repeat(n-i)
//         let stars = "*".repeat(2 * i-1)
//         console.log(space+stars)
//     }
//  }

//  pyramid(5)

//  function rightTriangle (n=5){
//     for(let i = 1 ; i<= n ; i++){
//         console.log("*".repeat(i))
//     }
//  }
//  rightTriangle(5)


//  function isPalindrome(str:string){
//   const cleaned = str.toLocaleLowerCase().replace(/[a-z0-9]/g,"")
//    return cleaned === cleaned.split("").reverse().join("");

//  }
// console.log(isPalindrome("Racecar"))


// function numericalPalindrome (num:number){

//   console.log(typeof num)
//   console.log(typeof num === 'number')

//   if(num <= 0 || (num % 10 === 0 && num !== 0)) return false

//   let rev = 0;
//   let copyNum = num

//   while(copyNum > rev){
//       rev = rev * 10 + (copyNum % 10)
//       copyNum = Math.floor(num/10)

//   }

//   return rev === copyNum || copyNum === Math.floor(rev/10)

// }

// console.log(numericalPalindrome(121))

// function firstNonFrequentChar (str:string){
//   let fer: Record<string, number>={}

//   for(let ch of str){
//       fer[ch] = (fer[ch] || 0) + 1
//   }

//   for(let ch of str){
//       if(fer[ch] == 1) return ch
      
//   }
// return null
// }

// function twoSum (nums:number[],target:number){

//   const map:any ={}

//   for(let i = 0 ; i<nums.length ; i++){
//     const complement = target - nums[i];
    
//      if(map[complement] != undefined){
//         return [map[complement],i]
//      }
//     map[nums[i]] = i;
//   }

// console.log(map)

// }

// console.log(twoSum([2, 7, 11, 15],13))

// function threeSum(arr:number[],target:number){

//   const sortArr = arr.sort((a,b)=> a - b)

//   for(let i = 0 ; i< sortArr.length -2 ; i++){

//     let left = i+1
//     let right = sortArr.length -1

//     while(left < right){
//       const sum = sortArr[i] + sortArr[left] + sortArr[right]

//       if(sum === target){
//           return true
//       }else if(sum < target){
//         left ++
//       }else{
//         right --
//       }
//     }

//   }

//   return false


// }

// threeSum([2,4,7,5,6,8],16)

  return (
    <>
    <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path="/class" element={<ClassComponentExample/>}/>
        <Route path='/debouncing' element={<Debouncing/>}/>
        <Route path='/throttle' element={<Throttle/>}/>
        <Route path='/reduxCounter' element={<ReduxCounter/>}/>
        <Route path='/todo' element={<SimpleTodoComponent/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/todo-features' element={<ToDo/>}/>
        <Route path='/simple-todo' element={<SimpleTodo/>}/>
        <Route path='/progress-bar' element={<ProgressBar/>}/>

    </Routes>
      {/* <ClassComponentExample/>
      <Debouncing/> */}
      {/* <Throttle/> */}
      {/* <ReduxCounter/> */}
      {/* <SimpleTodoComponent/> */}
      {/* <Product/> */}
     </>
  )
}

export default App
