import Modal from 'react-modal'
import React from 'react'

const ConfirmModal = (props) => {
    Modal.setAppElement('body');
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            contentLabel="Confirm"
            ariaHideApp={false}
        >
            <p>Tem certeza que desejar excluir esse item?</p>
            <button onClick={props.closeModal}>Cancelar</button>
            <button onClick={props.onRemove}>Excluir</button>
        </Modal>
    )
}

export default ConfirmModal