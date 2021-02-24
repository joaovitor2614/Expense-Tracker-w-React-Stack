import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage'
import { startSetItems } from './actions/items'
import { login, logout } from './actions/auth'

import 'react-dates/lib/css/_datepicker.css';
import '../node_modules/react-vis/dist/style.css';
import { firebase } from './firebase/firebase'
import 'normalize.css/normalize.css';

import './styles/styles.scss';


const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        hasRendered = true
        ReactDOM.render(jsx, document.getElementById('app'));
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("Logged in!")
        store.dispatch(login(user.uid))
        store.dispatch(startSetItems()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })

    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
        console.log("Logged out!")
    }
})


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'




