import './app/utils/css/branding/brandingDefinitions.css';

import React from 'react';
import { withAuthentication } from 'react-aad-msal';
import { Redirect, Route, Switch } from 'react-router';

import { EIcon } from './app/assets/svg/EquinorIcon';
import { authProvider } from './app/auth/authProvider';
import { NavBar } from './app/components/ui/NavBar';
import { SiteContent } from './app/components/ui/SiteContent';
import { SiteMenu } from './app/components/ui/SiteMenu';
import { SiteMenuHeader } from './app/components/ui/SiteMenuHeader';
import { SiteMenuLink } from './app/components/ui/SiteMenuLink';
import { CalculationPage } from './app/pages/CalculationPage';
import { CalculationsPage } from './app/pages/CalculationsPage';
import { CalculatorPage } from './app/pages/CalculatorPage';
import { LNGAgeingPage } from './app/pages/LNGAgeingPage';
import { LoginPage } from './app/pages/LoginPage';
import { NeqsimPage } from './app/pages/NeqsimPage';

const NotFound = () => (
  <div>
    Page not found
  </div>
);

const App = () => (
  <div style={{ height: '100%' }}>
    <NavBar />
    <SiteContent>
      <SiteMenu>
        <SiteMenuLink to="/neqsim" name="Home" icon={EIcon.INBOX} />
        <SiteMenuHeader name="LNG Ageing"></SiteMenuHeader>
        <SiteMenuLink to="/LNGageing" name="About" icon={EIcon.INFO} />
        <SiteMenuLink to="/calculator" name="Calculator" icon={EIcon.CALCULATOR} />
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

// const [{ }, dispatch]: [IAppState, any] = useStateValue();

export default withAuthentication(App, {
  provider: authProvider
});
