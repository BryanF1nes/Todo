import todoFactory from './todoFactory';
import todoList from './todoList';

const displayTodos = () => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';
  
    const todos = todoList.getTodos();
    todos.forEach((todo, index) => {
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
  
      const title = document.createElement('h3');
      title.textContent = todo.getTitle();
  
      const description = document.createElement('p');
      description.textContent = todo.getDescription();
  
      const completeButton = document.createElement('button');
      completeButton.textContent = todo.isCompleted() ? 'Mark Incomplete' : 'Mark Complete';
      completeButton.classList.add('todo-button');
      completeButton.addEventListener('click', () => {
        todo.toggleCompletion();
        displayTodos();
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('todo-button');
      deleteButton.addEventListener('click', () => {
        todoList.removeTodo(index);
        displayTodos();
      });
  
      if (todo.isCompleted()) {
        title.classList.add('completed');
        description.classList.add('completed');
      }
  
      todoDiv.appendChild(title);
      todoDiv.appendChild(description);
      todoDiv.appendChild(completeButton);
      todoDiv.appendChild(deleteButton);
  
      todoContainer.appendChild(todoDiv);
    });
  };

export default displayTodos;