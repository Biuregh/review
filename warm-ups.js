//Print Greeting
const printGreeting = ( name) => `Hello there, ${name}!`
console.log(printGreeting("Slimer"));

//Reverse Word Order
const reverseWordOrder = (string) => string.split(" ").reverse().join(" ");
console.log(reverseWordOrder("Ishmael me Call"));
//Calculate
const calculate = (num1, operation, num2) => {
    if(operation === "add" || operation === "+"){
        return num1+num2;
    }
    else if(operation === "sub" || operation === "-"){
        return num1-num2;
    }
    else if(operation === "mult" || operation === "*"){
        return num1*num2;
    }
    else if(operation === "div" || operation === "/"){
        return num1/num2;
    }
    else if(operation === "exp" || operation === "%"){
        return num1%num2;
    }
}
console.log(calculate(4,"+", 3));

//Letter Reverse
const letterReverse =(string) => string.split("").reverse().join("");
console.log(letterReverse("Aren't you a little short for a storm trooper"));
