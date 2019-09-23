import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {LoginPage} from "./app/pages/LoginPage";
import {CalculatorPage} from "./app/pages/CalculatorPage";
import {NavBar} from "./app/components/ui/NavBar";
import {SiteMenu} from './app/components/ui/SiteMenu';
import {SiteContent} from './app/components/ui/SiteContent';
import {ResultsPage} from './app/pages/ResultsPage';
import {Icon} from './app/assets/svg/EquinorIcon';
import {SiteMenuLink} from './app/components/ui/SiteMenuLink';

const NotFound = () => (
  <div>
    Page not found
  </div>
);

export const App = () => (
  <div style={{height: '100%'}}>
    <NavBar/>
    <SiteContent>
      <SiteMenu>
        <SiteMenuLink to="/calculator" name="Calculator" icon={Icon.CALCULATOR}/>
        <SiteMenuLink to="/results" name="Results" icon={Icon.RESULT}/>
      </SiteMenu>
      <Switch>
        <Redirect exact from="/" to="/calculator"/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/calculator" component={CalculatorPage}/>
        <Route path="/results" component={ResultsPage}/>
        <Route path="/" component={NotFound}/>
      </Switch>
    </SiteContent>
  </div>
);