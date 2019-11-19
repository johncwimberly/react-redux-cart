const addItem = (name) => {
    return {
        type: 'ADD',
        name
    };
}

const updateItem = (name, completed) => {
    return {
        type: 'UPDATE',
        name,
        completed
    };
}

const deleteItem = (name) => {
    return {
        type: 'DELETE',
        name
    }
}

export default { addItem, updateItem, deleteItem }
