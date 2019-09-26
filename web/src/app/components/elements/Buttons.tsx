import React from 'react';
import styled from 'styled-components/macro';
import { EIcon, EquinorIcon } from '../../assets/svg/EquinorIcon';
import { EColor } from '../../common/Color';


export interface IStandardButtonProps {
    text: string;
    icon?: EIcon;
    onClick?: Function;
}

const StStandardButton = styled.button`
    display: flex;
    cursor: pointer;
    background-color: ${EColor.GREEN};
    border-radius: 3px;
    color: white;
    font-size: 14px;
    border: 0;
    padding: 10px 15px;
    border-radius: 5px;
    > span {
        margin: 0px 0 0 10px;
    }
    :hover {
        background-color: ${EColor.DARK_GREEN}
    }
`;

export const StandardButton = (props: IStandardButtonProps) => {
    return (
        <StStandardButton onClick={() => {
            if (props.onClick) {
                props.onClick();
            }
        }}>
            {props.icon &&
                <EquinorIcon icon={props.icon} size={16}></EquinorIcon>
            }
            <span>{props.text}</span>
        </StStandardButton>
    )
}