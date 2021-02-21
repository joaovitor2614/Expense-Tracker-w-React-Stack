
import moment from 'moment'
import uuid from 'uuid'


export const addItem = ({
    type = '',
    title = '',
    amount = 0,
    createdAt = moment(),
    note = ''
}) => ({
    type: 'ADD_ITEM',
    item: {
        id: uuid(),
        type,
        title,
        amount,
        createdAt,
        note
    }
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id
})

export const editItem = (id, updates) => ({
    type: 'EDIT_ITEM',
    id,
    updates
})