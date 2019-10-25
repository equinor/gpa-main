import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {LoginPage} from "./app/pages/LoginPage";
import {CalculatorPage} from "./app/pages/CalculatorPage";
import {NavBar} from "./app/components/ui/NavBar";
import {SiteMenu} from './app/components/ui/SiteMenu';
import {SiteContent} from './app/components/ui/SiteContent';
import {EIcon} from './app/assets/svg/EquinorIcon';
import {SiteMenuLink} from './app/components/ui/SiteMenuLink';
import "./app/utils/css/branding/brandingDefinitions.css";
import { CalculationsPage } from "./app/pages/CalculationsPage";
import { CalculationPage } from "./app/pages/CalculationPage";
import { LNGAgeingPage } from "./app/pages/LNGAgeingPage";
import { NeqsimPage } from "./app/pages/NeqsimPage";

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
        <SiteMenuLink to="/neqsim" name="About Neqsim"/>
        <SiteMenuLink to="/LNGageing" name="LNG Ageing"/>
        <SiteMenuLink to="/calculator" name="Calculator" icon={EIcon.CALCULATOR}/>
        <SiteMenuLink to="/calculations" name="Calculations" icon={EIcon.RESULT}/>
      </SiteMenu>
      <Switch>
        <Redirect exact from="/" to="/LNGageing"/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/calculator" component={CalculatorPage}/>
        <Route path="/calculation/:id" component={CalculationPage}/>
        <Route path="/calculations" component={CalculationsPage}/>
        <Route path="/LNGAgeing" component={LNGAgeingPage}/>
        <Route path="/neqsim" component={NeqsimPage}/>
        <Route path="/" component={NotFound}/>
      </Switch>
    </SiteContent>
  </div>
);