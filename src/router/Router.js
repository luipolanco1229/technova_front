import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartingScreen from "../components/StartingScreen";
import { Computers } from "../pages/Computers";
import { Gadgets } from "../pages/Gadgets";
import { ProductDetail } from "../pages/ProductDetail";
import { Smartphones } from "../pages/Smartphones";
import { Tvs } from "../pages/Tvs";

export const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={StartingScreen} />
                <Route path='/computers' component={Computers} />
                <Route path='/smartphones' component={Smartphones} />
                <Route path='/tvs' component={Tvs} />
                <Route path='/gadgets' component={Gadgets} />
                <Route path='/product/:id/:type' component={ProductDetail} />
            </Switch>
        </BrowserRouter>
    );
}