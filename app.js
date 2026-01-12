console.log("hello everyone")

function sayHello (){
    console.log("hello world!")
}

sayHello ()
sayHello ()

function sayHelloTo (userName){
    console.log("hello "+ userName + 
        "!"
    )
}

 sayHelloTo("bob")
 sayHelloTo("naimah")

function greet(greeting, userName){
    console.log(greeting + " " + userName)

}

greet("Good Morning", "bob")
greet("salaam","Naimah")

// How to use returns

function add (a,b){
    return a + b;
}

const result = add (1,5)
console.log("The Result is", result);

const anotherResult = add(2, 10);
console.log("Another result is", anotherResult);

//multiple results
function multiply (a,b){
    return a * b
}

const multiplyResult = multiply (2,10) 
    console.log("the multiply result is",multiplyResult)

    //subtracting

function subtract(a,b){
    return a - b
}

const Subracting = subtract (10,5)
console.log("The result of subracting",Subracting)

// dividing

function divide(a,b){
return a/b }

const division = divide (20,2)
console.log("The division answer is",division)

// calculate

function calculate (a,b,operator){
    if (operator=== "+"){return add (a,b);} 
    else if (operator=== "-"){return subtract (a,b)}
    else if (operator==="*"){return multiply(a,b)}
    else if (operator==="/"){return divide (a,b)}
}

const calculating= calculate(1,5,"+");
console.log("The result is", calculating);

const anotherCalculate = calculate(2,10,"*")
console.log("the other results", anotherCalculate);  

//workshop

const myName="Muhid"
function sayWagwan (){
    console.log("Wagwan"+ " "+ myName +"!")
}
sayWagwan();
console.log(myName);

//color
const myFavColor="black"

function printColor (){
    const myFavColor="red"
    console.log(myFavColor)
}

printColor()
console.log(myFavColor)