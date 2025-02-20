
const items = (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    name: action.name,
                    onSale: false,
                    id: state.reduce((highestId, item) => {
                        return (item.id > highestId) ? item.id : highestId;
                    }, 0) + 1
                }
            ]
        case 'UPDATE':
            return state.map( item => {
                if (item.id == action.id) {
                    item.onSale = action.onSale;
                }
                return item;
            });
        case 'DELETE':
            return state.filter( item => (item.id != action.id));
        default:
            return state;
    }
}

export default items;