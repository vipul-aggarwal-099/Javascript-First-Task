/* Added Variable for myName and myCourses  */
let myName = "Vipul Aggarwal";
let myCourses = ["HTML", "CSS", "JavaScript", "Node JS"];

/* Print  myName and myCourses using the variables */
console.log("My name is " + myName + "," + " and my courses are: " + myCourses);

/* Write the function using for loop and used an if statement to find the values in even */
function evenNumbers() {
    for(let i = 1; i <= 200; i++) {
        if(i%2 == 0) {
            console.log(i);
        }
    }
}

/* Calling the Function */
evenNumbers();
