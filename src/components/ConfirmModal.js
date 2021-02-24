import Modal from 'react-modal'
import React from 'react'

const ConfirmModal = (props) => {
    Modal.setAppElement('body');
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            contentLabel="Confirm"
            closeTimeoutMS={200}
            ariaHideApp={false}
            className='modal'
        >
            <p className='modal__title'>Tem certeza que desejar excluir esse item?</p>
            <div className='button__gp'>
                <button className='button button--app button button-m-r' onClick={props.closeModal}>Cancelar</button>
                <button className='button button--secondary' onClick={props.onRemove}>Excluir</button>

            </div>

        </Modal>
    )
}

export default ConfirmModal