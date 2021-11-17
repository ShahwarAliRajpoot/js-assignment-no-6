// alert("PAKISTAN ZINDABAD")

// Chapter no 35-38

// Q1
// function currentDate(){
//   var date = new Date();
//   console.log(date)
// }
// currentDate();

// Q2
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// function greet(firstName,lastName){

//    return firstName + lastName + " Good Morning"
// }
// var greeting = greet(firstName,lastName)
// console.log(greeting)

// Q3
// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")

// function addition(num1,num2){
//      return num1 + num2;
// }
// var add = addition(num1,num2)
// document.write("Sum of two number is: " + add)

// Q4
// var num1 = +prompt("Enter first number")
// var opt = prompt("Enter operator ")
// var num2 = +prompt("Enter second number")
// function calculator(num1,opt,num2){
//     if(opt == "+"){
//         return num1 + num2
//     }
//     else if(opt == "-"){
//         return num1 - num2
//     }
//     else if(opt == "*"){
//         return num1 * num2
//     }
//     else if(opt == "/"){
//         return num1 / num2
//     }
//     else if(opt == "%"){
//        return num1 % num2
//     }
//     else{
//         return "Please right a correct operator"
//     }
// }
// var cal = calculator(num1,opt,num2)
// document.write(num1 , opt , num2 +" = "+ cal)

// Q5





// Q6
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);



// Q7
// var num1 = prompt("Enter Start Number")
// var num2 = prompt("Enter Start Number")
// function count(num1,num2){
//     for(var i = num1; i <= num2; i++){
//       document.write(i)
//     }
// }
// count(num1,num2);

// Q8




//  Q9




// Q10
// var str = prompt()
// function Palindrome(str) {

//     var len = str.length;

//     for (var i = 0; i < str.length / 2; i++) {

//         if (str[i] !== str[len - 1 - i]) {
//             return "It is not a palindrome word: ";
//         }
//     }
//     return "It is a palindrome word: ";
// }
// var pal = Palindrome(str)
// document.write(pal + " <b>" + str + "</b>")


// Q11
// var str = 'the quick brown fox';

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// var caps = str.split(' ').map(capitalize).join(' ');
// console.log(caps)

// Q12
// var str = "Web Development Tutorial"
// document.write(str + "<br>")
// function longestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// var find =longestWord(str)
// document.write("The Longest Word Is: " + find)

// Q13



// Q14





















