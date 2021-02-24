import React, { useState } from 'react'
import { startRemoveItem, startEditItem } from '../../actions/items'
import { connect } from 'react-redux'
import ItemForm from '../ItemForm'
import ConfirmModal from '../ConfirmModal'

export const EditItemPage = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function onSubmit(item) {
        props.startEditItem(props.item.id, item)
        props.history.push("/dashboard")
    }
    function onRemove() {
        props.startRemoveItem(props.item.id)
        props.history.push("/dashboard")
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <div className='edit-header'>
                        <h1>Editar item</h1>
                        <div>
                            <button className='button button--remove' onClick={openModal}>Remover</button>
                        </div>

                    </div>

                </div>

            </div>
            <ItemForm onSubmit={onSubmit} item={props.item} />

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
    startRemoveItem: (item) => dispatch(startRemoveItem(item)),
    startEditItem: (id, updates) => dispatch(startEditItem(id, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItemPage)