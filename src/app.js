import todoFactory from './components/todoFactory';
import todoList from './components/todoList';

const todoForm = document.querySelector('#add-todo-form');
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    const date = e.target.date.value;

    const newTodo = todoFactory(title, description, priority, date)

    todoList.addTodo(newTodo);
    console.log(todoList.todos)
    e.target.reset();
})