const todoFactory = (title, description) => {
    let completed = false;
  
    const getTitle = () => title;
    const getDescription = () => description;
    const isCompleted = () => completed;
    const toggleCompletion = () => {
      completed = !completed;
    };
  
    return { getTitle, getDescription, isCompleted, toggleCompletion };
  };
  
  export default todoFactory;