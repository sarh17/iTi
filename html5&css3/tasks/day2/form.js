<<<<<<< HEAD
let form = document.getElementById("form")
let inProgressContainer = document.getElementById("inProgress")
let count =0;
let tasks=[];



form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(e.target.textVal.value)
    let item = document.createElement("p")
    item.innerHTML = e.target.textVal.value;
    item.setAttribute("id",count++);
    item.setAttribute("draggable",true);
    item.addEventListener("dragstart",function(e){
        e.dataTransfer.setData("text",this.id)
    })
    inProgressContainer.append(item)
    let obj={
        id :item.id,
        text:item.innerHTML,
        parent:inProgressContainer.id
    }
    tasks.push(obj)
    save(tasks)

})
function save(list)
{
    localStorage.setItem("tasks",JSON.stringify(list))
}
let tasksSection = document.getElementsByClassName("tasksSection")
for (let index = 0; index < tasksSection.length; index++) {
    // tasksSection[index].addEventListener("dragover",)
    
    tasksSection[index].addEventListener("drop",function(e){
        let draggedId =  e.dataTransfer.getData("text")
        console.log(draggedId,this.id)

        this.append(document.getElementById(draggedId))
        tasks.forEach(i=>{
            if(i.id == draggedId){
                i.parent = this.id
            }
        })
        save(tasks)
    })
}


function dragover(e){
    e.preventDefault()
=======
let form = document.getElementById("form")
let inProgressContainer = document.getElementById("inProgress")
let count =0;
let tasks=[];



form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(e.target.textVal.value)
    let item = document.createElement("p")
    item.innerHTML = e.target.textVal.value;
    item.setAttribute("id",count++);
    item.setAttribute("draggable",true);
    item.addEventListener("dragstart",function(e){
        e.dataTransfer.setData("text",this.id)
    })
    inProgressContainer.append(item)
    let obj={
        id :item.id,
        text:item.innerHTML,
        parent:inProgressContainer.id
    }
    tasks.push(obj)
    save(tasks)

})
function save(list)
{
    localStorage.setItem("tasks",JSON.stringify(list))
}
let tasksSection = document.getElementsByClassName("tasksSection")
for (let index = 0; index < tasksSection.length; index++) {
    // tasksSection[index].addEventListener("dragover",)
    
    tasksSection[index].addEventListener("drop",function(e){
        let draggedId =  e.dataTransfer.getData("text")
        console.log(draggedId,this.id)

        this.append(document.getElementById(draggedId))
        tasks.forEach(i=>{
            if(i.id == draggedId){
                i.parent = this.id
            }
        })
        save(tasks)
    })
}


function dragover(e){
    e.preventDefault()
>>>>>>> 9b3aa67b9e971d0212fbdffdb52f727fde4f5221
}