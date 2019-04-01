import React, {Component} from 'react';
import s from './App.module.css';
import ShopsList from "./Component/ContainerComponent/ShopsListContainer";
import {Route, Switch} from "react-router";
import ProductsPageContainer from "./Component/ContainerComponent/ProductsPageContainer";
import AddShop from "./Component/ContainerComponent/AddShopContainer";
import EditShopContainer from "./Component/ContainerComponent/EditShopContainer";
import EditProductContainer from "./Component/ContainerComponent/EditProductContainer";

class App extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                <Switch>
                    <Route exact path='/shopsList/edit/:id'
                           render={() => <EditShopContainer/>}/>
                    <Route exact path='/shopsList'
                           render={() => <ShopsList/>}/>
                    <Route exact path='/products/:id'
                           render={() => <ProductsPageContainer/>}/>
                    <Route exact path='/products/:id/edit/:productId'
                           render={() => <EditProductContainer/>}/>
                    <Route exact path='/shopsList/add'
                           render={() => <AddShop/>}/>
                    <Route exact path='/'
                           render={() => <ShopsList/>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
