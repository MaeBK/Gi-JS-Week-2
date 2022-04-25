/*
VERY EASY: Write a function named min that takes 
two arguments and returns their minimum.
*/
function min(){
    let interger=[5,42,13,55,69];
    return Math.min(...ages(interger));
}
let total=min();
console.log(min);

/*
EASY: Create an array of students holding their last name, first name, and age with
3 students. To validate, please log a greeting with the first name, last name and
age of the 2nd student. The output should look like:
"Hello, my name is John Doe and I'm 19 years old."
*/
let firstName = ['Jesse','Mae','Cole','Patrick','Austin'];
let lastName = ['Rhys','Keenan','Hudson','Tinkler','Maxium'];
let ages =[28,24,27,31,25];

console.log("Hey! I'm "+firstName[1]+" "+lastName[1]+" and I'm "+ages[1]+" years old.")

/*
MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console
that number and its corresponding month. 
For example: if the user enters the number 3, then it should return the
month “March.” Alert the user if they enter an invalid number 
(e.g. less than 1 or greater than 12).
*/
if(userInput==1){
    console.log('January')
}else if(userInput==2){
    console.log('Febuary')
}else if(userInput==3){
    console.log('March')
}else if(userInput==4){
    console.log('April')
}else if(userInput==5){
    console.log('May')
}else if(userInput==6){
    console.log('June')
}else if(userInput==7){
    console.log('July')
}else if(userInput==8){
    console.log('August')
}else if(userInput==9){
    console.log('September')
}else if(userInput==10){
    console.log('October')
}else if(userInput==11){
    console.log('November')
}else if(userInput==12){
    console.log('December')
}else {
    console.alert('There are only 12 months, please do better...')
}

/*
HARD: Given the information below for Tom and Jerry.
● Tom - height:  9in mass: 8 g
● Jerry - height: 10in mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
Create a Boolean variable containing information about whether Tom has a higher 
BMI than Jerry. Print a string to the console with the variable from step 3 
( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/

let tom={
    name:"Tom",
    height: 9,
    mass: 8,
    bmi1: function(){
        return ((mass / height ^2) = mass / (height * height));
    }
}
let jerry={
    name:"Jerry",
    height: 10,
    mass: 45,
    bmi2: function(){
        return ((mass / height ^2) = mass / (height * height));
    }
}
if(bmi1==bmi2){
    console.log('They are the same')
}else if(bmi1>bmi2){
    console.log('Tom has a higher BMI')
}else{
    console.log('Jerry has a higher BMI')
}
