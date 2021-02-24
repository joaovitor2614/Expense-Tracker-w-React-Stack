import React from 'react'
import { startLogin, startLoginGit } from '../../actions/auth'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

export const LoginPage = ({ startLogin, startLoginGit }) => (
    <div className='box-container'>
        <div className='box-container__content'>
            <div className='box-container__title-box'>
                <h1 className='box-container__title'>Login com</h1>
            </div>
            <div className='box-container__btn-group'>
                <button className='button button--google button--brand' onClick={startLogin}>
                    <FontAwesomeIcon icon={faGoogle} />Google</button>
                <button className='button button--git button--brand' onClick={startLoginGit}>
                    <FontAwesomeIcon icon={faGithub} />Github</button>
            </div>

        </div>

    </div>

)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginGit: () => dispatch(startLoginGit())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)