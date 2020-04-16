import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './app/pages/LoginPage';
import { CalculatorPage } from './app/pages/CalculatorPage';
import { NavBar } from './app/components/ui/NavBar';
import { SiteMenu } from './app/components/ui/SiteMenu';
import { SiteContent } from './app/components/ui/SiteContent';
import { EIcon } from './app/assets/svg/EquinorIcon';
import { SiteMenuLink } from './app/components/ui/SiteMenuLink';
import './app/utils/css/branding/brandingDefinitions.css';
import { CalculationsPage } from './app/pages/CalculationsPage';
import { CalculationPage } from './app/pages/CalculationPage';
import { LNGAgeingPage } from './app/pages/LNGAgeingPage';
import { NeqsimPage } from './app/pages/NeqsimPage';
import { SiteMenuHeader } from './app/components/ui/SiteMenuHeader';

const NotFound = () => <div>Page not found</div>;

export const App = () => (
  <div style={{ height: '100%' }}>
    <NavBar />
    <SiteContent>
      <SiteMenu>
        <SiteMenuLink to="/neqsim" name="Home" icon={EIcon.INBOX} />
        <SiteMenuHeader name="LNG Ageing" />
        <SiteMenuLink to="/LNGageing" name="About" icon={EIcon.INFO} />
        <SiteMenuLink
          to="/calculator"
          name="Calculator"
          icon={EIcon.CALCULATOR}
        />
        <SiteMenuLink to="/results" name="Results" icon={EIcon.RESULT} />
      </SiteMenu>
      <Switch>
        <Redirect exact from="/" to="/LNGageing" />
        <Route path="/login" component={LoginPage} />
        <Route path="/calculator" component={CalculatorPage} />
        <Route path="/result/:id" component={CalculationPage} />
        <Route path="/results" component={CalculationsPage} />
        <Route path="/LNGAgeing" component={LNGAgeingPage} />
        <Route path="/neqsim" component={NeqsimPage} />
        <Route path="/" component={NotFound} />
      </Switch>
    </SiteContent>
  </div>
);
