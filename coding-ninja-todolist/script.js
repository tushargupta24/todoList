let total =0;
let completed = 0;
let pending = 0;


// change count function
function changeCount(total, completed, pending){
    if(total < 0){
        total =0;
    }
    if(completed < 0){
        completed =0;
    }
    if(pending < 0){
        pending =0;
    }
    document.getElementById("total-count").innerHTML = total;
    document.getElementById("completed-count").innerHTML = completed;
    document.getElementById("pending-count").innerHTML = pending;
}



// add task on list
function addList(){
    var task = document.getElementById("todovalue").value;
//    if(task = ""){
//     return;
//    }
   // Create an "li" node:
const node = document.createElement("li");
const input = document.createElement("input");
// const para = document.createElement("p");
const span = document.createElement("span");
// para.innerText = task;
node.setAttribute("id",`${total}`);
span.classList.add("deleted");
span.setAttribute("id",`task-${total}`);
span.setAttribute("onclick",`deleteTask(${total})`);
span.innerHTML = "x";
input.setAttribute("type", "checkbox");
node.appendChild(input);
// node.appendChild(para);
node.appendChild(span);
// Create a text node:
const textnode = document.createTextNode(task);

// Append the text node to the "li" node:
node.appendChild(textnode);
   document.getElementById("addtask").append(node);
   document.getElementById("todovalue").value = "";
   completeShow();
       // count section
total +=1;
pending +=1;
changeCount(total, completed, pending);
// deletedCount();
 
}



// complete green tasks shows green banner
function completeShow(){
    var lists = document.querySelectorAll("li");
    lists.forEach(function(event){
        event.addEventListener('click', function(){
            if(!event.classList.contains("completed")){
                event.classList.add("completed");
                event.classList.add("alert-success");
                event.children[0].checked = true;
                event.setAttribute("onclick",`removeComplete(${this.id})`);
          
                                   // count section
pending -=1;
completed +=1;
changeCount(total, completed, pending);
            }
        })
    })
}
// delete the task
function deleteTask(id){
   let deletedId = document.getElementById(`task-${id}`);
    // alert(id);
    if( document.getElementById(`task-${id}`).parentNode.classList.contains("completed")){
                    completed -= 1;
                    total -=1;
                }
                else{
                    // pending -=1;
                    total -=1;
                    completed -=1;
                }
                changeCount(total, completed, pending);
                document.getElementById(`task-${id}`).parentNode.remove();
}



function removeComplete(id){
    let data = document.getElementById(`${id}`);
    data.classList.remove("completed");
    data.removeAttribute("onclick");
    pending += 1;
    completed  -= 1;
    changeCount(total, completed, pending);

}

