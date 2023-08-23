// todo factory is going to be the building blocks for creating todos
function todoFactory(title, description, priority, date) {
    return {title, description, priority, date};
}

export default todoFactory;