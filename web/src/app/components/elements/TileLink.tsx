import React from "react";
import styled from "styled-components";
import useReactRouter from 'use-react-router';
import { EColor } from "../../common/Color";

interface ITileLink {
    image: string;
    text: string;
    link: string;
    description?: string;
    style?: Object;
}

export const TileLink = (props: ITileLink) => {
    const { history } = useReactRouter();
    const isDescription = props.description ? true : false;
    return (
        <StLinkWrapper
            isDescription={isDescription}
            style={props.style}
        >
            <StTileLink onClick={() => {
                history.push(props.link);
            }}
            >
                <StImage image={props.image}></StImage>
                <StContent>
                    <span>{props.text}</span>
                </StContent>
            </StTileLink>
            {isDescription &&
                <StDescription>
                    <p>{props.description}</p>
                </StDescription>
            }
        </StLinkWrapper>
    )
}

const StLinkWrapper = styled.div`
    height: 230px;
    width: ${(props: { isDescription: boolean }) => props.isDescription ? "100%" : "230px"};
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
    background-Image: ${(props: { image: string }) => "url('" + props.image + "')"};
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
    padding: 0px 10px 10px 20px;
`;