import moment from 'moment'
// pegar items de acordo com tipo despesa/renda
function getType(sortType, item) {
    if (sortType === 'all') {
        return item
    } else if (sortType === 'income') {
        if (item.type === 'income') {
            return item
        }
    } else if (sortType === 'expense') {
        if (item.type === 'expense') {
            return item
        }
    }
}


export default (items, { text, sortBy, typeSort, startDate, endDate }) => {
    return items.filter((item) => {
        const createdAtMoment = moment(item.createdAt)
        const matchStart = startDate ? moment(startDate).isSameOrBefore(createdAtMoment, "day") : true
        const matchEnd = endDate ? moment(endDate).isSameOrAfter(createdAtMoment, "day") : true
        const textMatch = item.title.toLowerCase().includes(text.toLowerCase())

        return textMatch && matchStart && matchEnd && getType(typeSort, item)
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}