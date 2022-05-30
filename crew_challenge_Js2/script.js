
function Ajouter() {
    if(document.formSaisie.titre.value!=""){
      addTodo.innerText = titre.value;
    }
    else {
        alert("Vous devez écrire une tache d'abord!");
    }
  }
      //SELECTEURS
  const todoInput = document.querySelector(".todo-input");
  const todoButton = document.querySelector(".todo-button");
  const todoList = document.querySelector(".todo-list");
  
  
  //ECOUTEURS
  
  todoButton.addEventListener("click", addTodo);
  
  
  //FUNCTIONS
  function addTodo(event) {
  event.preventDefault();
  
  
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  
  
  //Créer le Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  
  //Bouton Check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  
  
  //Bouton Supprimer
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  
  
  //AJOUTER NOTRE TODO À TODO-LIST
  todoList.appendChild(todoDiv);
  todoInput.value = "";
  }
  
  
  
  
  //Ecouteurs
  todoList.addEventListener("click", deleteCheck);
  
  function deleteCheck(e) {
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
   
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  
  //CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  }