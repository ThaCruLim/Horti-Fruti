import React from "react";
import{ BrowserRouter, Router, Switch } from "react-router-dom";
import produtos from './pages/produtos'
import inicio from './pages/inicio'

export default function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Router patch='/' exact component={inicio}/>
                <Router patch='/produtos' exact component={produtos}/>
            </Switch>
        </BrowserRouter>
    )
}