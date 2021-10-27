import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from "../containers/Layout";
import NewPassword from "../containers/NewPassword";
import Home from "../pages/Home"
import RecoveryPassword from "../containers/RecoveryPassword";
import ShopCar from "../containers/ShopCar";
import CreateAccount from "../containers/CreateAccount";
import ProductDetail from "../components/ProductDetail";
import EditAccount from "../containers/EditAccount";
import EmailSent from "../containers/EmailSent";
import Login from "../containers/Login";
import TotalOrders from '../containers/TotalOrders'
import NotFound from "../pages/NotFound"
import InitPage from "../containers/InitPage";
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/NewPassword' component={NewPassword} />
          <Route exact path='/recovery-password' component={RecoveryPassword} />
          <Route exact path='/shop-car' component={ShopCar} />
          <Route exact path='/create-account' component={CreateAccount} />
          <Route exact path='/product-detail' component={ProductDetail} />
          <Route exact path='/edit-account' component={EditAccount} />
          <Route exact path='/email-sent' component={EmailSent} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/total-orders' component={TotalOrders} />
          <Route exact path='/init' component={InitPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    // <Layout>
    //   <Login/>
    //   <RecoveryPassword/>
    // </Layout>
  )
}

export default App;