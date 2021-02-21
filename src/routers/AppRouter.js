import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header'
import DashboardPage from '../components/page components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import AddItemPage from '../components/page components/AddItemPage'
import ItemList from '../components/page components/ItemList'
import EditItemPage from '../components/page components/EditItemPage'




const AppRouter = () => (
  <BrowserRouter >
    <div>
      <Header />
      <Switch>

        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddItemPage} />
        <Route path="/list" component={ItemList} />
        <Route path="/edit/:id" component={EditItemPage} />

        <Route component={NotFoundPage} />
      </Switch>

    </div>


  </BrowserRouter>
);

export default AppRouter;
