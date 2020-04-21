import React from 'react';
import styled from 'styled-components';
import { EColor } from '../../common/Color';
import { useHistory } from 'react-router-dom';

interface ITileLink {
  image: string;
  text: string;
  link: string;
  description?: string;
  style?: Object;
}

export const TileLink = (props: ITileLink) => {
  let history = useHistory();
  const isDescription = !!props.description;
  return (
    <StLinkWrapper isDescription={isDescription} style={props.style}>
      <StTileLink
        onClick={() => {
          history.push(props.link);
        }}
      >
        <StImage image={props.image} />
        <StContent>
          <span>{props.text}</span>
        </StContent>
      </StTileLink>
      {isDescription && (
        <StDescription>
          <p>{props.description}</p>
        </StDescription>
      )}
    </StLinkWrapper>
  );
};

const StLinkWrapper = styled.div`
  height: 230px;
  width: ${(props: { isDescription: boolean }) =>
    props.isDescription ? '100%' : '230px'};
  display: flex;
`;

const StTileLink = styled.div`
  width: 230px;
  height: 230px;
  background-color: ${EColor.LIGHT_GRAY};
  color: ${EColor.BLACK};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  &:hover {
    background-color: ${EColor.GREEN};
    color: white;
  }
`;

const StImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 170px;
  background-image: ${(props: { image: string }) =>
    "url('" + props.image + "')"};
`;

const StContent = styled.div`
  margin: 22px 0 0 0;
  font-size: 18px;
`;

const StDescription = styled.div`
  flex: 1;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  padding: 0 10px 10px 20px;
  white-space: pre-wrap;
`;
