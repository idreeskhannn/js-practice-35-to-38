//  question = 1
// function foo() {
//     var date = new Date();
//     document.write(date)
// }
// foo()

  // question =2

// function foo() {
//     var firstName = "idrees"+" ";
//     var lastName = "khan"
//     document.write(firstName+lastName)
// }
// foo()

// question = 3

// function value(num1,num2) {
//    var value = num1+num2;
//    return value
// }

// var value = 2 + 4;
// document.write(value)


    // question = 4



// function add(){
// var times = +prompt("how many values.......?")
// var addvalue = 0;
// for (var i =0; i < times; i++){
// addvalue += +prompt("enter values"+(i +1))


// }
// document.write(addvalue)}



// function sub(){
//     var times = prompt("how many values.......?")
//     var subvalue = 0;
//     for (var i =0; i < times; i++){
//     subvalue -= prompt("enter values")
    
    
//     }
//     document.write(subvalue)
    
// }   

// 
// function mul(){
//     var times = prompt("how many values.......?")
//     var multivalue = 0;
//     for (var i =0; i < times; i++){
//     multivalue *= prompt("enter values")
    
    
//     }
//     document.write(multivalue)
    
// } 


  //  question = 5

// function sumOfSquares(num) {
//     var i;

//     for (i=0;i<=num;i++) {
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
    
// document.write("The sum of squares for numbers up to and including ");
// }

// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);

// question = 6

// function factorial(n){
//     //base case
//     if(n == 0 || n == 1){
//         return 1;
//     //recursive case
//     }else{
//         return n * factorial(n-1);
//     }
// }
// var n = 4;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);

  // question = 7

// function sum()
// {
//     var First = 1;
//     var Second = document.getElementById('txtSecondNumber').value;
//     alert(parseInt(First) + parseInt(Second);
// }


  // question = 8

// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()





// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
  
//   document.write(pythagorean(4, 3));


// question = 9

//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(length, width) {
//     return 2*( length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));


  // question= 10
  
// function checkPalindrome(str) {

//     // find the length of a string
//     var len = string.length;

//     // loop through half of the string
//     for (var i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// var string = prompt('Enter a string: ');

// // call the function
// var value = checkPalindrome(string);

// document.write(value);

// question = 11

// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// question 12

// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// question = 13

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// quetsion = 14

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

//   // question = 15

// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("The circumfrence is " + y + "."  +"<br>"  +"<br>");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//  document.write("The area is " + x + ".");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);
