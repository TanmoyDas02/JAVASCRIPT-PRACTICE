{
  // function removeTodo(id){
  //     let div = document.getElementById(id)
  //     div.remove()
  // }
  // function markTodo(id){
  //     let div1 = document.getElementById(id)
  //     div1.children[0].classList.toggle('completed')
  // }
  // let id = 1;
  // document.getElementById('addBtn').addEventListener('click', (e) => {
  //     e.preventDefault();
  //     let todoInput = document.getElementById('todoInput')
  //     let div = document.createElement('div')
  //     div.setAttribute('class', 'singleTodo')
  //     div.setAttribute('id', id)
  //     div.innerHTML =`
  //     <div class="singleTodo">
  //         <h2>${todoInput.value}</h2>
  //         <input type="checkbox" name="" id="" onclick = markTodo(${id})>
  //         <button onclick = removeTodo(${id})>Remove Todo</button>
  //     </div>
  //     `
  //     document.getElementById('allTodo').appendChild(div)
  //     id++;
  //     todoInput.value = ''
  // })
}

let data = JSON.parse(localStorage.getItem("allTodo")) || [];

function displayTodo() {
  document.getElementById("allTodo").innerHTML = "";
  data.map((singleTodo, id) => {
    todoStructure(singleTodo);
  });
}

function todoStructure(singleTodo, id) {
  let div = document.createElement("div");
  div.setAttribute("class", "singleTodo");
  div.innerHTML = `
        <div class="singleTodo">
            <h2>${singleTodo.todoVal}</h2>
            <input type="checkbox" name="" id="">
            <button>Remove Todo</button>
       </div>
        `;
  let btn = div.getElementsByTagName("button");
  let inp = div.getElementsByTagName("input");
  let h2 = div.getElementsByTagName("h2");
  btn[0].addEventListener("click", (e) => {
    e.target.parentNode.remove();
    removeTodo(id);
  });

  if (singleTodo.completed) {
    h2[0].classList.toggle("completed");
    inp[0].setAttribute("checked", true);
  }

  inp[0].addEventListener("click", (e) => {
    e.target.previousElementSibling.classList.toggle("completed");
    toggleTodo(id);
  });
  document.getElementById("allTodo").appendChild(div);
}

document.getElementById("addBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let todoInput = document.getElementById("todoInput");
  let todoVal = todoInput.value;
  data.push({ todoVal, completed: false });

  localStorage.setItem("allTodo", JSON.stringify(data));
  displayTodo();
  todoInput.value = "";
});

function removeTodo(id) {
  data.splice(id, 1);
  localStorage.setItem("allTodo", JSON.stringify(data));
  displayTodo();
}

function toggleTodo(id) {
  data[id].completed = !data[id].completed;
  localStorage.setItem("allTodo", JSON.stringify(data));
  displayTodo();
}

displayTodo();
