//JavaScript Overview
// What is Syntax?
//Key Concepts: 
//Statements with semicolons; (optional but recommended)
//variable hold values using const let var

//const { connected } = require("process");
//const { setHeapSnapshotNearHeapLimit } = require("v8");

// or /* used for comments
//const name="Andrew";
//let age = 25;
//what is a function
//block of code that can run again and again
/*why use function?
- orgnize your connected
-make code reusable
-break problems into seteps

*/
// function greet(name){
//     const message = `Hello ${name}!`;
//     document.getElementById("output").innerHTML = message;

//     console.log("hello," + name + "!");
// }
// function askName(){
//     const userName = document.getElementById("nameInput").value;
//     greet(userName);
// }
// askName();

const movie = [{
    title:"Shrek",
    director:"Vicky Jenson",
    rating:  5,
    title:"Minecraft",
    director:"idk Jenson",
    rating:0
}]

movie.title="Shrek 2"
console.log(movie.title)

colors =["pink", "green", "blue"]
const colorOptional1 ="pink";
const colorOptional2 ="green";

