import React, { useState } from 'react'
import { removeItem, editItem } from '../../actions/items'
import { connect } from 'react-redux'
import ItemForm from '../ItemForm'
import ConfirmModal from '../ConfirmModal'

export const EditItemPage = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function onSubmit(item) {
        props.editItem(props.item.id, item)
        props.history.push("/")
    }
    function onRemove() {
        props.removeItem(props.item.id)
        props.history.push("/")
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <h1>Editar item</h1>
            <ItemForm onSubmit={onSubmit} item={props.item} />
            <button onClick={openModal}>Remover</button>
            <ConfirmModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                onRemove={onRemove}
            />
        </div>

    )

}

const mapStateToProps = (state, props) => ({
    item: state.items.find(item => item.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    removeItem: (item) => dispatch(removeItem(item)),
    editItem: (id, updates) => dispatch(editItem(id, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItemPage)