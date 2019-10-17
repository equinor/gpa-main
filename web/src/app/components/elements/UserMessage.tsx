import React from "react";
import styled from "styled-components";
import { EquinorIcon, EIcon } from "../../assets/svg/EquinorIcon";
import { EColor } from "../../common/Color";

interface IUserMessage {
    type: "loading" | "error"
    text: string;
}

export const UserMessage = (props: IUserMessage) => {
    return (
        <StUserMessage type={props.type}>
            {props.type === "loading" &&
                <EquinorIcon icon={EIcon.LOADING} size={24} />
            }
            {props.type === "error" &&
                <EquinorIcon icon={EIcon.ERROR} size={24} />
            }
            <span>{props.text}</span>
        </StUserMessage>
    )
}

interface IStUserMessage {
    type?: "loading" | "error";
}

const StUserMessage = styled.div`
    display: flex;
    width: 250px;
    color: ${(props: IStUserMessage) => (props.type === "loading" ? EColor.GREEN : EColor.DANGER_RED)};
    background-color: ${(props: IStUserMessage) => (props.type === "loading" ? EColor.LIGHT_GREEN : EColor.DANGER_LIGHT_RED)};
    height: 100px;
    border-radius: 5px;
    flex-direction: column;
    align-items: center; 
    > svg {
        -webkit-animation: ${(props: IStUserMessage) => (props.type === "loading" ? "spin 2s linear infinite" : "")};
        -moz-animation: ${(props: IStUserMessage) => (props.type === "loading" ? "spin 2s linear infinite" : "")};
        animation: ${(props: IStUserMessage) => (props.type === "loading" ? "spin 2s linear infinite" : "")};
        margin: 20px 0 18px 0;
    }
    > span {
        font-weight: bold;
    }
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;