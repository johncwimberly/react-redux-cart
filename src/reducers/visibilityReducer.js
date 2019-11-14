const visibility = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SHOW_ALL':
            return 'SHOW_ALL';
        case 'SHOW_ON_SALE':
            return 'SHOW_ON_SALE';
        case 'SHOW_NOT_ON_SALE':
            return 'SHOW_NOT_ON_SALE';
        default:
            return state;
    }
}

export default visibility;