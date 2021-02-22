import React from 'react'
import { startLogin, startLoginGit } from '../../actions/auth'
import { connect } from 'react-redux'

export const LoginPage = ({ startLogin, startLoginGit }) => (
    <div>
        <button onClick={startLogin}>Login com google</button>
        <button onClick={startLoginGit}>Login com Github</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginGit: () => dispatch(startLoginGit())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)