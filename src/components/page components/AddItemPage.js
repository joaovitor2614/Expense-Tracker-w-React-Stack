import React from 'react'
import { startAddItem } from '../../actions/items'
import { connect } from 'react-redux'
import ItemForm from '../ItemForm'


export const AddItemPage = ({ startAddItem, history }) => {


    function onSubmit(item) {
        startAddItem(item)
        history.push('/dashboard')



    }


    return (
        <div>
            <h1>Adicionar item</h1>
            <ItemForm onSubmit={onSubmit} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddItem: (item) => dispatch(startAddItem(item))
})

export default connect(undefined, mapDispatchToProps)(AddItemPage)