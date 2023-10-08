'use strict';

//used w3b to initially add the span x buttons to the premade li items

var ulTaskList=document.getElementById('ulTaskList');
var listItems=ulTaskList.getElementsByTagName("li");
for(let i = 0;i<listItems.length;++i){
    var closeButton=document.createElement('span');
    var txt=document.createTextNode('\u00D7');
    closeButton.className='close';
    closeButton.onclick= function(){
        deleteTask(this);
    };
    closeButton.appendChild(txt);
    listItems[i].appendChild(closeButton);
}

//used w3b for the strike out on click
ulTaskList.addEventListener('click',function (event) {
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked');
    }
},false);

//broke up w3b js to functions. similar but less loops. just taking the remove and add features
//will add a task set by the user, along with the date and the color
function addTask(){
    const userTask=document.getElementById('taskInput').value;
    const font=document.getElementById('taskColor').value;
    const date=document.getElementById('taskDate').value;

    //create li and appends the list with a formatted user input
    var task=document.createElement('li');
    task.style.color=font;

    //check for good input
    if (userTask===''){
        alert("Please enter your Task");
    }


    if (date===''){
        task.innerHTML=`${userTask}`;
    }
    else{
        task.innerHTML=`${userTask} (DUE:${date})`;
    }



     // Add a close button to delete the task
     var closeButton = document.createElement('span');
     closeButton.className = 'close';
     closeButton.innerHTML = "\u00d7";
     closeButton.onclick= function(){
        deleteTask(this);
    };
     task.appendChild(closeButton);

     //add task after formatting it and adding the x button
    const ulTaskList=document.getElementById('ulTaskList');
    ulTaskList.appendChild(task);

    //reset the input fields
    document.getElementById("taskInput").value='';
    document.getElementById('taskColor').value='#000000';
    document.getElementById('taskDate').value='';
}

// deletes a task when the close button is clicked
function deleteTask(closeButton) {
    var task = closeButton.parentElement;
    task.style.display = 'none'; // Hide the task
}