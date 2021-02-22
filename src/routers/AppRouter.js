import React from 'react';
import { Route, Router, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import DashboardPage from '../components/page components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import AddItemPage from '../components/page components/AddItemPage'
import ItemList from '../components/page components/ItemList'
import EditItemPage from '../components/page components/EditItemPage'
import LoginPage from '../components/auth components/LoginPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()




const AppRouter = () => (
  <Router history={history} >
    <div>

      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddItemPage} />
        <PrivateRoute path="/list" component={ItemList} />
        <PrivateRoute path="/edit/:id" component={EditItemPage} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>


  </Router>
);

export default AppRouter;
