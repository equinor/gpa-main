import React from "react";
import styled from "styled-components";
import { EquinorIcon, EIcon } from "../../assets/svg/EquinorIcon";
import { EColor } from "../../common/Color";

interface ILoading {
    text: string;
}

export const Loading = (props: ILoading) => {
    return (
        <StLoading>
            <EquinorIcon icon={EIcon.LOADING} size={24}/>
            <span>{props.text}</span>
        </StLoading>
    )
}

const StLoading = styled.div`
    display: flex;
    width: 250px;
    background-color: ${EColor.LIGHT_GREEN};
    height: 100px;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    > svg {
        -webkit-animation:spin 2s linear infinite;
        -moz-animation:spin 2s linear infinite;
        animation:spin 2s linear infinite;
        margin: 20px 0 18px 0;
    }
    > span {
        color: ${EColor.GREEN};
        font-weight: bold;
    }
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;