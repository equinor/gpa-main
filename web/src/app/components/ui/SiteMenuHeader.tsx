import styled from "styled-components";
import React from "react";
import { EColor } from "../../common/Color";

interface ISiteMenuHeader {
    name: string;
}

export const SiteMenuHeader: React.FunctionComponent<ISiteMenuHeader> = (props) => (
    <StSiteMenuHeader>
        {props.name}
    </StSiteMenuHeader>
)

const StSiteMenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 10px 15px 50px;
  box-sizing: border-box;
  margin: 0 50px;
  border-bottom: 1px solid #e4e4e4;
  color: ${EColor.BLACK};
  align-items: center;
  text-decoration: none;
  font-family: Equinor,serif; 
  font-weight: 500; 
`; 