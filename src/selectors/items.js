import moment from 'moment'


export default (items, { text, sortBy, startDate, endDate }) => {
    return items.filter((item) => {
        const createdAtMoment = moment(item.createdAt)
        const matchStart = startDate ? moment(startDate).isSameOrBefore(createdAtMoment, "day") : true
        const matchEnd = endDate ? moment(endDate).isSameOrAfter(createdAtMoment, "day") : true
        const textMatch = item.title.toLowerCase().includes(text.toLowerCase())

        return textMatch && matchStart && matchEnd
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}