import React from 'react';
import styled from 'styled-components/macro';

import { P } from '../components/elements/Texts';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { TileLink } from '../components/elements/TileLink';
export const LNGAgeingPage: React.FunctionComponent = () => (
  <PageContent>
    <TitleBlock>LNG Ageing</TitleBlock>
    <StPageWrapper>
      <P>Fill the description</P>
      <div style={{
        display: "flex",
        margin: "25px 0 0 0"
      }}>
        <TileLink
          image="./ship.png"
          text="Calculator"
          link="/calculator"
          style={{margin: "0 25px 0 0"}}
        ></TileLink>
        <TileLink
          image="./calc.png"
          text="Calculations"
          link="/calculations"
        ></TileLink>
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