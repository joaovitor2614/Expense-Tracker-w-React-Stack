import React from 'react'
import { addItem } from '../../actions/items'
import { connect } from 'react-redux'
import ItemForm from '../ItemForm'


export const AddItemPage = ({ addItem, history }) => {


    function onSubmit(item) {
        addItem(item)
        history.push('/')



    }


    return (
        <div>
            <h1>Adicionar item</h1>
            <ItemForm onSubmit={onSubmit} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(undefined, mapDispatchToProps)(AddItemPage)