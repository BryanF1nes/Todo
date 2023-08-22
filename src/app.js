import todoFactory from './components/todoFactory';
import todoList from './components/todoList';
import displayTodos from './components/todoApp';

const addTodoForm = document.getElementById('add-todo-form');
addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const description = e.target.description.value;
  const newTodo = todoFactory(title, description);
  todoList.addTodo(newTodo);
  displayTodos();
  e.target.reset();
});

displayTodos();