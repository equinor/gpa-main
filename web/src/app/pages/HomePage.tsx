import React from 'react';
import styled from 'styled-components/macro';

import { P } from '../components/elements/Texts';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { TileLink } from '../components/elements/TileLink';
import shipImage from '../assets/ship2-min.jpg';

export const HomePage: React.FunctionComponent = () => (
  <PageContent>
    <TitleBlock>Neqsim</TitleBlock>
    <StPageWrapper>
      <P>
        NeqSim (Non-Equilibrium Simulator) is a tool for estimation of fluid
        behavior and process design for oil and gas production. The basis for
        NeqSim is a library of fundamental mathematical models related to phase
        behavior and physical properties of oil and gas. The Radixs portal is a
        web-based user interface for NeqSim.
      </P>
      <div
        style={{
          display: 'flex',
          margin: '25px 0 0 0',
        }}
      >
        <TileLink
          image={shipImage}
          text="LNG Ageing"
          link="/lng/about"
          description={`The LNG ageing tool calculates the effect of boil off from LNG ships during transport from loading to off-loading. The calculations are based on known volume and composition of loaded LNG. The boil off rate, pressure and ship transport time are used as input for the calculations...
          `}
        />
      </div>
    </StPageWrapper>
  </PageContent>
);

export const StPageWrapper = styled.div`
  padding: 30px;
  width: 800px;
  box-sizing: border-box;
  h2 {
    margin: 0 0 20px 0;
  }
`;
