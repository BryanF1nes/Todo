const todoList = (() => {
  const todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  }

  return { addTodo, todos }
})()

export default todoList;