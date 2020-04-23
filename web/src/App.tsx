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
import { HomePage } from './app/pages/HomePage';
// @ts-ignore
import { Accordion } from '@equinor/eds-core-react';

const { AccordionItem, AccordionHeader, AccordionPanel } = Accordion;

const NotFound = () => <div>Page not found</div>;

export const App = () => {
  return (
    <div style={{ height: '100%' }}>
      <NavBar />
      <SiteContent>
        <SiteMenu>
          <SiteMenuLink to="/gpa" name="Home" icon={EIcon.INBOX} />
          <Accordion>
            <AccordionItem isExpanded>
              <AccordionHeader>LNG Ageing</AccordionHeader>
              <AccordionPanel>
                <SiteMenuLink to="/lng/about" name="About" icon={EIcon.INFO} />
                <SiteMenuLink
                  to="/lng/calculator"
                  name="Calculator"
                  icon={EIcon.CALCULATOR}
                />
                <SiteMenuLink
                  to="/lng/results"
                  name="Results"
                  icon={EIcon.RESULT}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </SiteMenu>
        <Switch>
          <Redirect exact from="/" to="/LNGageing" />
          <Route path="/login" component={LoginPage} />
          <Route path="/lng/calculator" component={CalculatorPage} />
          <Route path="/lng/result/:id" component={CalculationPage} />
          <Route path="/lng/results" component={CalculationsPage} />
          <Route path="/lng/about" component={LNGAgeingPage} />
          <Route path="/gpa" component={HomePage} />
          <Route path="/" component={NotFound} />
        </Switch>
      </SiteContent>
    </div>
  );
};
