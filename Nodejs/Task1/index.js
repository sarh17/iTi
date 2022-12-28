let forms=[
        {name:"negm",grade:100},
        {name: "sarah", grade:120}
    ];


// console.log(process.argv)
/////////////////////////////////////////////////////////////////
function addForm(name,grade)
{
    forms.push({name:name, grade:grade});
    console.log(forms);
}
// function listForm(){
//     console.log(forms)
// }

function replace(grade, id){
    forms[id].grade =grade;
    console.log(forms)
}
function del(p) {
    forms.splice(p,1)
    console.log(forms)
}
function sum(){

    const sum= forms.reduce((accumulator,Object)=>{
        return accumulator+ Object.grade;
    },0 )
    console.log(sum)
}
if(process.argv[2]=="add"){
  addForm(process.argv[3],process.argv[4])

}
else if(process.argv[2]=="list"){

    listForm()
}
else if(process.argv[2]=="replace"){

    replace(process.argv[3], process.argv[4])
}
else if(process.argv[2]=="del"){

    del(process.argv[3])
}
else if(process.argv[2]=="sum"){
    sum();
}

/////////////////////////////////////////////////////////////////////

