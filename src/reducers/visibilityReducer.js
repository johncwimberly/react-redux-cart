const visibility = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SHOW_ALL':
            return 'SHOW_ALL';
        case 'SHOW_COMPLETED':
            return 'SHOW_COMPLETED';
        case 'SHOW_IN_PROGRESS':
            return 'SHOW_IN_PROGRESS';
        default:
            return state;
    }
}

export default visibility;