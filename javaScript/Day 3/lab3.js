// Create array that contain some countries (Array of 10 strings)and show random country every time reload page  
var arr= ["tunisia", "egypt" , "germany", "spain", "italy" , "noreaway", "usa", "England", "netherlands", "france"] ;
var arr= arr[Math.floor(Math.random()*arr.length)];
console.log(arr);
////////////////////////////////////////////////////////
// Display the current date and time in local format on the page. 
var now= new Date();
console.log(now);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ask the user to enter his Email, and use function strings to check if the Email contains @, ". 
var email = prompt ("please Enter Your Email"); 
    function Email() {     
         email =/^[a-zA-Z]{,20}[0-9]@[a-z]{4,10}(.)[a-z]{3,5}/        
        while (email.indexOf("@") != -1 ){      
            email = prompt ("please Enter Your Email");  
        } 

          
    }
    console.log(email)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4-	input ask user to enter his birth date and tell user to enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999,
//  and then create function that take user input as a parameter and ensure that the string is entered in this format (that user entered string is 10 characters and contains (-) after the second character and after fifth character). 
//  a.	If the user input was correct: make the function create new date object, and initialize it with Day, Month, year values (using date constructor: Date(y,m,d)) and then show alert to the user with the date in date string format. 
//  b.	If user input wasn't correct, show alert saying "Wong Date Format".
 
//  var birthday =prompt("enter your birthday");
//  var year= prompt();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5-	Create an array of objects that hold student name along with his degree (Each element of the array is an object has 2 properties: Name and Degree).
// a.	Find student Name, who got degree between 90 and 100
// b.	Add a new student to the array [Use push()].
// c.	Remove the last student of the array [Use pop()], and then print all elements of the array.
var students = [
    { 
      name: "sarah ",
      grade: 90
    },
    { 
      name: "nora",
      grade: 60
    },
    { 
      name: "alyaa",
      grade: 120
    }
  ];
  sort.students
   
