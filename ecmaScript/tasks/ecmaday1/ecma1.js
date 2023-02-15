// Swap the values of two variables using destructuring  
// var arr=[20,30]
// var a=arr[0]
// var b=arr[1]
// var [a,b]=arr;
// console.log(arr)
////////////////////////////////////////////////////////////////
// Using rest parameter and spread operator return max value from any array note: array length is not fixed return min and max value and display each of them separately after function calling 

// Do all this using function  
// var arr=[20,30]
// var arr1=[60,90]
// let [x,y,...rest]=arr;
// console.log(Math.min(...arr))
// console.log(Math.max(...arr1))
//////////////////////////////////////////////////////////////////////////////////
// Create a student literal object that contains: name, University, faculty,
//  and final grade, and use print his data in the console using template literals in this  
// let obj={
//      name: "sarah",
//      University:"port said" ,
//      faculty:"computer",
//      finalGrade:94
// }

// console.log(`${obj.name} is a student in faculty of ${obj.faculty} in university ${obj.University} with finalGrade ${obj.finalGrade}`)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Make a set that holds countries names. 
// Try to add repeated names, will the set accept it? 
// Print the set values using spread operator and using for…of. 

// make difference from s1 and s2  
// make union in another way 
let s1= new Set(["UAE","UK","Germany","CN"])
let s2= ["UAE","UK","Germany","CN","netherlands","bolgharya"]
let set1=new Set();

s1.add("moracco")
s2.add("noreway")

for(let set1 of s1){   
    console.log(i)
}
// console.log(...s1)
// console.log(s1.size)



//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Make a Map that contains the student name as a key, 
// and object that contains an array of his studied courses and his grade in each course.
//  (The object structure as following: {“negm”:[ 
// {Coursename:”JavaScript”, Grade:”Excellent”}, 

// {Coursename:”Jquery”, Grade:”Good”}, 

// {Coursename:”React”, Grade:”V.Good”}, 

// {Coursename:”ESNext”, Grade:”Good}, 

// {Coursename:”NodeJS”, Grade:”V.Good”}] 

let student= new Map();
     student.set("negm",{Grades:
                [{coursename:"java script",Grade:"Excelent"},
                {coursename:"jquery",Grade:"Good"},
                {coursename:"ESnext",Grade:"v.Good"},
                {coursename:"NodeJS",Grade:"Good"}]});
     student.set("sarah",{Grades:
                [{coursename:"java script",Grade:"Excelent"},
                {coursename:"jquery",Grade:"Good"},
                {coursename:"ESnext",Grade:"v.Good"},
                {coursename:"NodeJS",Grade:"Good"}]});
            for(let elem of student){
                console.log(elem)
                for(let x of elem[1].Grades){
                    console.log(x)
                }
            }
                    































































































//     function printRepeating(arr, size)
//     {
    //         let count = new Array(size);
    //         count.fill(0);
    //         let i;
    
    //         document.write("Repeating elements are ");
    //         for (i = 0; i < size; i++)
    //         {
        //             if (count[arr[i]] == 1)
        //                 document.write(arr[i] + " ");
        //             else
        //                 count[arr[i]]++;
        //         }
        //     }
        
        // Map.Set(student, "negm")  