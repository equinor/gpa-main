import React from 'react';
import styled from 'styled-components/macro';

import { P } from '../components/elements/Texts';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { TileLink } from '../components/elements/TileLink';
export const NeqsimPage: React.FunctionComponent = () => (
  <PageContent>
    <TitleBlock>Neqsim</TitleBlock>
    <StPageWrapper>
      <P>Fill the description</P>
      <div style={{
        display: "flex",
        margin: "25px 0 0 0"
      }}>
        <TileLink
          image="./ship2.png"
          text="LNG Ageing"
          link="/LNGageing"
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis condimentum erat a ullamcorper. Etiam vel congue risus, ut porta nisl. Vivamus bibendum augue ac tortor dapibus, at egestas nisi auctor. Ut laoreet lorem quis sem ultrices pellentesque. Vestibulum faucibus mollis posuere. Donec vulputate tortor sit amet tellus hendrerit tincidunt. "}
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