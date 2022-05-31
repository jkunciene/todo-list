const my_task_text= document.querySelector('#my-task-text');
console.log(my_task_text);
const my_priority= document.getElementById('my-priority');
console.log(my_priority);
const my_table = document.querySelector('table');
const my_list= document.querySelector('tbody');

//pasizymiu mygtuka
const my_button=document.getElementById('my-button');
//kai mygtukas paspaustas, iskviesk funkcija
my_button.addEventListener('click', function(e){
    //neleisk formai persikrauti
    //puslapiui atsinaujinus, duomenys dings
    e.preventDefault();

    //mano sukurtos funkcijos iskvietimas
    addTodo();

    //išvalau laukus
    my_task_text.value='';
});

function addTodo(){

    console.log(my_task_text.value);
    console.log(my_priority.value);

    if(my_task_text.value !=='' && my_task_text.value.length > 6){

        my_table.className = 'visible table mt-5 ';
       //kiekvienai uzduociai kuriame nauja eilute
       const my_row = document.createElement('tr');
       my_list.appendChild(my_row); 

       //check mygtukas, uzduoties isbraukimas
       const my_place_check= document.createElement('td');
       const my_check = document.createElement('input');
       my_check.setAttribute("type", "checkbox");
       my_row.appendChild(my_place_check);
       my_place_check.appendChild(my_check);

       my_check.addEventListener('click', my_underline);
       function my_underline(){
           console.log(my_check.checked);

           if(my_check.checked){
               //jei elementas pazymimas, uzdedama varnele
               my_task.style.textDecoration = 'line-through';
               my_task.style.opacity = '0.5';
           } else{
            my_task.style.textDecoration = 'none';
            my_task.style.opacity = '1';
           }
       }

       const my_task = document.createElement('td');
       my_task.textContent = my_task_text.value;
       my_row.appendChild(my_task);

       const my_priority_value = document.createElement('td');
       switch(my_priority.value){
            case 'High':
                my_priority_value.innerHTML =  '<p class="btn btn-danger">'+ my_priority.value +'</p>';
                break;
            case 'Normal':
                my_priority_value.innerHTML = '<p class="btn btn-success">' + my_priority.value + '</p>';
                break;
            case 'Low':
                my_priority_value.innerHTML = '<p class="btn btn-secondary">' + my_priority.value + '</p>';
                break;
       }
       my_row.appendChild(my_priority_value); 
      
       //progress spausdinimas

       const my_percent = document.createElement('td');
       let my_percent_value = document.getElementById('my-percent').value;

       switch(my_percent_value){
            case '0 %':
               my_percent.innerHTML = '<div class="progress">'+'<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'+'</div>';
               break;
            case '25 %':
                my_percent.innerHTML = '<div class="progress">'+'<div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>'+'</div>';
                break;
            case '50 %':
                my_percent.innerHTML = '<div class="progress">'+'<div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>'+'</div>';
                break;
       }
       my_row.appendChild(my_percent);

       //delete mygtuko pridejimas

       const my_delete_place = document.createElement('td');   

        // vietoje sio  my_delete_btn.innerHTML = '<button type="button" class="btn btn-danger">Done</button>';
       const my_delete_btn = document.createElement('button');
       my_delete_btn.setAttribute("type", "button");   
       my_delete_btn.className = 'btn btn-danger';
       my_delete_btn.textContent = "Done";
     
       //i eilute idedu stulpeli
       my_row.appendChild(my_delete_place);
       //i stulpeli idedu mygtuka
       my_delete_place.appendChild(my_delete_btn);

       my_delete_btn.addEventListener('click', function(e){
           e.preventDefault();
           deleteTask(e.target.parentNode.parentNode);
       });

       function deleteTask(some_row){
            my_list.removeChild(some_row);
            if(my_list.innerText===''){
                my_table.className = 'invisible';
            }
       }


    } else {
        alert("Iveskite uzduoti");
    }



}