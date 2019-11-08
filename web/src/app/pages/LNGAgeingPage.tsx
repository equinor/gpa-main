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
      <P>
        The LNG ageing tool calculates the effect of boil off from LNG ships during transport from loading to off-loading. The calculations are based on known volume and composition of loaded LNG. The boil off rate, pressure and ship transport time are used as input for the calculations.
      <br /><br />The tool will report how volume, composition and energy parameters changes during the voyage.
      <br /><br />The energy parameters (GCV, WI) are calculated based on ISO6976 (2016). The used need to set the reference temperature for volume measurements and combustion used for calculation of energy and density of the gas.
      <br /><br />LNG liquid density is calculated based on ISO6578.
      </P>
      <div style={{
        display: "flex",
        margin: "25px 0 0 0"
      }}>
        <TileLink
          image="./ship-min.png"
          text="Calculator"
          link="/calculator"
          style={{ margin: "0 25px 0 0" }}
        ></TileLink>
        <TileLink
          image="./calc-min.png"
          text="Results"
          link="/results"
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