
const items = (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    name: action.name,
                    onSale: false
                }
            ]
        case 'UPDATE':
            return state.map( item => {
                if (item.name == action.name) {
                    item.onSale = action.onSale;
                }
                return item;
            });
        case 'DELETE':
            return state.filter( item => (item.name != action.name));
        default:
            return state;
    }
}

export default items;