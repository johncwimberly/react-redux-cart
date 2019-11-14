const addItem = (name) => {
    return {
        type: 'ADD',
        name
    };
}

const updateItem = (name, onSale) => {
    return {
        type: 'UPDATE',
        name,
        onSale
    };
}

const deleteItem = (name) => {
    return {
        type: 'DELETE',
        name
    }
}

export default { addItem, updateItem, deleteItem }
