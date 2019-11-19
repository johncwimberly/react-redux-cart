const showAll = () => {
    return { type: 'SHOW_ALL' }
}

const showOnSale = () => {
    return { type: 'SHOW_COMPLETED' }
}

const showNotOnSale = () => {
    return { type: 'SHOW_IN_PROGRESS' }
}

export default {showAll, showOnSale, showNotOnSale}