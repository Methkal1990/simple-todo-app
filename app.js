const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchInput = document.querySelector(".search input");
const searchForm = document.querySelector(".search");

const generateTemplate = todo => {
  const html = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;
  list.innerHTML += html;
};

// add new todo
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  //   console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => {
      todo.classList.add("filtered");
    });

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => {
      todo.classList.remove("filtered");
    });
};

// search todo with keyup event
searchInput.addEventListener("keyup", e => {
  const term = searchInput.value.trim().toLowerCase();
  filterTodos(term);
});

// prevent refresh page on submit in search input
searchForm.addEventListener("submit", e => {
  e.preventDefault();
});
