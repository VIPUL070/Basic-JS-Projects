let todoForm = document.getElementById("todo-form")
let todoInput = document.getElementById("todo-input")
let todoList = document.getElementById("todo-list")


function newTask(text){
  let li = document.createElement("li")
  li.className = "list"

  let span = document.createElement("span")
  span.className = "list-span"
  span.textContent = text
  
  span.addEventListener("click", (e) => {
    span.classList.toggle("completed")
  })
  li.appendChild(span)


  let delBtn = document.createElement("button")
  delBtn.className = "del-btn"
  delBtn.textContent =  "del"

  delBtn.addEventListener("click" , (e) => {
    li.remove()
  })
  span.appendChild(delBtn)

  return li
}

todoForm.addEventListener("submit" , (e) => {
  e.preventDefault();

  let text = todoInput.value;
  let listText = newTask(text);
  todoList.appendChild(listText)
  todoInput.value = ''
})