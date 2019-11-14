const showAll = () => {
    return { type: 'SHOW_ALL' }
}

const showOnSale = () => {
    return { type: 'SHOW_ON_SALE' }
}

const showNotOnSale = () => {
    return { type: 'SHOW_NOT_ON_SALE' }
}

export default {showAll, showOnSale, showNotOnSale}