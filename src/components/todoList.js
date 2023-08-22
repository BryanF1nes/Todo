const todoList = (() => {
    const todos = [];
  
    const addTodo = (todo) => {
      todos.push(todo);
    };
  
    const removeTodo = (index) => {
      todos.splice(index, 1);
    };
  
    const getTodos = () => todos;
  
    return { addTodo, removeTodo, getTodos };
  })();
  
  export default todoList;