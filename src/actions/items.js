import database from '../firebase/firebase'
import moment from 'moment'



export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
})

export const startAddItem = (itemData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth
        const {
            type = '',
            title = '',
            amount = 0,
            createdAt = moment(),
            note = ''
        } = itemData
        const item = { type, title, amount, createdAt, note }
        console.log('until here...')
        return database.ref(`users/${uid}/items`).push(item).then((ref) => {
            dispatch(addItem({
                id: ref.key,
                ...item
            }))
        })

    }
}



export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id
})

export const startRemoveItem = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth
        return database.ref(`users/${uid}/items/${id}`).remove().then(() => {
            dispatch(removeItem(id))
        }).catch((error) => {
            console.log(error.name)
            console.log(error.message)
        })
    }
}

export const editItem = (id, updates) => ({
    type: 'EDIT_ITEM',
    id,
    updates
})

export const startEditItem = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth
        return database.ref(`users/${uid}/items/${id}`).update(updates).then(() => {
            dispatch(editItem(id, updates))
        }).catch((error) => {
            console.log(error.name)
            console.log(error.message)
        })
    }
}

export const setItems = (items) => ({
    type: 'SET_ITEMS',
    items
})

export const startSetItems = () => {
    return (dispatch, getState) => {
        const uid = getState().auth
        return database.ref(`users/${uid}/items`).once('value').then((snapshot) => {
            const items = []
            snapshot.forEach((childSnapshot) => {
                items.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setItems(items))

        })

    }
}