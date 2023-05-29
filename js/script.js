const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const editForm = document.getElementById("edit-form");
const editInput = document.getElementById("edit-input");
const cancelEditBtnt = document.getElementById("cancel-edit-btn");
let oldInputValue;

const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);

  todoInput.value = "";

  todoInput.focus();
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
    }
  });
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEL = e.target;
  const parentEL = targetEL.closest("div");

  let todoTitle;
  if (parentEL && parentEL.querySelector("h3")) {
    todoTitle = parentEL.querySelector("h3").innerText;
  }
  if (targetEL.classList.contains("finish-todo")) {
    parentEL.classList.toggle("done");
  }

  if (targetEL.classList.contains("remove-todo")) {
    parentEL.remove();
  }

  if (targetEL.classList.contains("edit-todo")) {
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
});

cancelEditBtnt.addEventListener("click", (e) => {
  e.preventDefault();

  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});

const feito = document.getElementsByClassName("done");
const aFazer = document.getElementsByClassName("todo");

atualizaSelect = () => {
  var filtro = document.getElementById("filtro");

  var opcaoValor = filtro.options[filtro.selectedIndex].value;

  if (opcaoValor === "todos") {
    for (i = 0; i < aFazer.length; i++) {
      aFazer[i].classList.remove("hideX");
    }
  } else if (opcaoValor === "aFazer") {
    for (i = 0; i < aFazer.length; i++) {
      aFazer[i].classList.remove("hideX");
    }
    for (i = 0; i < feito.length; i++) {
      feito[i].classList.add("hideX");
    }
  } else if (opcaoValor === "feitos") {
    for (i = 0; i < aFazer.length; i++) {
      aFazer[i].classList.add("hideX");
    }
    for (i = 0; i < feito.length; i++) {
      feito[i].classList.remove("hideX");
    }
  }
};

const btnDeleteCaracter = document.getElementById("btnDeleteCaracter");

btnDeleteCaracter.addEventListener(
  "click",
  (btnDelC = () => {
    if (barraPesquisa.value.length) {
      barraPesquisa.value = barraPesquisa.value.substr(
        0,
        barraPesquisa.value.length - 1
      );
      barraPesquisa.focus();
    }
  })
);

pesquisar = () => {
  let valorPesquisa = document
    .getElementById("barraPesquisa")
    .value.toLowerCase();
  let divTodo = document.getElementsByClassName("todo");

  for (i = 0; i < divTodo.length; i++) {
    let divSelect = divTodo[i];
    let textTodo = divSelect.querySelector("h3");
    let textoTodoValue = textTodo.innerText.toLowerCase();

    if (textoTodoValue.includes(valorPesquisa)) {
      divSelect.style.display = "";
    } else {
      divSelect.style.display = "none";
    }
  }
};