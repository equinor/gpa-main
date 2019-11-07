import React from 'react';
import styled from 'styled-components/macro';
import { EIcon, EquinorIcon } from '../../assets/svg/EquinorIcon';
import { EColor } from '../../common/Color';


export interface IStandardButtonProps {
    text: string;
    icon?: EIcon;
    onClick?: Function;
    style?: Object;
    disabled?: boolean;
}

interface IStStandardButtonProps {
    disabled?: boolean;
}

const StStandardButton = styled.button`
    display: flex;
    cursor: ${(props: IStStandardButtonProps) => props.disabled ? "normal" : "pointer"};
    background-color: ${(props: IStStandardButtonProps) => props.disabled ? EColor.LIGHT_GRAY : EColor.GREEN};
    color: ${(props: IStStandardButtonProps) => props.disabled ? EColor.GRAY : "white"};
    border-radius: 3px;
    font-size: 14px;
    border: 0;
    padding: 10px 15px;
    border-radius: 5px;
    rect, path {
        fill: ${(props: IStStandardButtonProps) => props.disabled ? EColor.GRAY : "white"};
    }
    > span {
        margin: 0px 0 0 10px;
    }
    :hover {
        background-color: ${(props: IStStandardButtonProps) => props.disabled ? EColor.LIGHT_GRAY : EColor.DARK_GREEN};
    }
`;

export const StandardButton = (props: IStandardButtonProps) => {
    return (
        <StStandardButton
            style={props.style}
            disabled={props.disabled}
            onClick={typeof props.onClick !== "undefined" ? () => {
                if (props.onClick && !props.disabled) {
                    props.onClick();
                }
            } : undefined}>
            {props.icon &&
                <EquinorIcon icon={props.icon} size={16}></EquinorIcon>
            }
            <span>{props.text}</span>
        </StStandardButton>
    )
}