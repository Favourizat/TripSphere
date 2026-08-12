import { useEffect, useState } from "react";




const MobileUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

   useEffect(() => {
    const getusers = async => {
        try{
            const response = await fetch("https://jsonplaceholder.com")
            const data = await response.json()
            setUsers(data)
        } catch(error) {
            console.log("Error")
        }
    }
    getusers()
   }, []);

   return <ul></ul>
}

//  A function
function add(a, b) {
    return a + b;
}
// A component
function Button({ text }) {
    return <button>{text}</button>
}

// Reverse String
function reverseString(str) {
    return str.split("").reverse().join("")
    console.log(reverseString("frontend"))
}

focus on FaLanguage, syntax, array

// Remove duplicate values in an array

const numbers = [1, 2, 2 ,3 ,4, 4, 5]
const uniqueNumbers = [...new Set(numbers)]
consolelog(uniqueNumbers(numbers))

// Find largest numbers

function findLargest(numbers){
    return Math.max(...numbers)
    console.log(findLargest[1, 2, 6, 9, 9, 6])
}

// Filter an array 
const users = [
    {name: "John", age: 17},
    {name: "Sam", age: 20},
    {name: "Tuni", age: 25},
];
   const adultUsers = users.filter(user => user.age >= 20)
   console.log(adultUsers)

   // Create a Counter in React

   import { useState } from "react";

   function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>

            <button
            onClick={() => setCount(prev => prev + 1)}>Add
            </button>

            <button
            onClick={() => setCount(prev => prev - 1)}>
                Subtract
            </button>
        </div>
    )
   }
   export default Counter;

   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState("")

   useEffect(() => {
    const getUsers = async () => {
        try{
            setLoading(true)
        const response = await fetch("https:api.example.come/Users")
    }
    if(!response.ok){
        throw new Error("Failed to fetch")
    }
    const data = await response.json()
    setUsers(data)
    } catch(err){
        setError(err.message)
    }finally{
        setLoading(false)
    }
        getUsers()
   }, [])

   const users = [
    { name: "Favour", age: 24 },
  { name: "John", age: 30 },
  { name: "Sarah", age: 27 }
   ]
   const names = users.map(user => user.name)

   // A function

   function greet(name) {
    return `Hello, ${name}`
    console.log(greet("Favour"))
   }

   // Component
   function Welcome(){
    return(
        <div>
            <h1>Welcome Home</h1>
        </div>
    )
   }