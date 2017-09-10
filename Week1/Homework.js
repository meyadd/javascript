//1. Declare a variable x and initialize it with an integer.
let x = 10;

//2. How do you round the number 7.25, to the nearest integer?
let y = Math.round(7.25); // -> y = 7

//3. Create a array called colors with the strings red, green and blue inside.
let colors = ["red", "green", "blue"];

//4. How can you find the length of the string you just created?
/***length of string:***/
let str = "Hello World!"; 
let str_length = str.length; // -> str_length = 12
/***length of array:***/
let colors_length = colors.length; // -> colors_length = 3

//5. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type. For example:
let x = 9;
let y = 'Hello';
if (typeof x == typeof y) {
	console.log('SAME TYPE');
}
else
{
	console.log('Different TYPE');
}

//6. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
let x = 7;
x = x % 3;// -> x=1

//7. Write a program to answer the following questions:
//Can you store multiple types in an array? Numbers and strings?
/***YES***/
let arr = [5, "green", "blue" , 8];
//Can you compare inifities? (Not in Eyad's world) - does 6/0 == 10/0? How can you test this?
/****6/0=Infinity , 10/0=Infinity -> 6/0 equal 10/0***/
if(6/0 == 10/0)
	console.log('Equal');
else
	console.log('Not Equal');
