import React from "react";
import {Color} from '../../common/Color';

export interface IProps {
  icon: Icon,
  size?: number,
}

interface IconProps {
  size?: number,
}

const MenuIcon: React.FC<IconProps> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M2 5.33333V4H14V5.33333H2ZM2 8.66667H14V7.33333H2V8.66667ZM2 12H14V10.6667H2V12Z" fill="#007079"/>
    </mask>
    <g mask="url(#mask0)">
      <rect width="16" height="16" fill={Color.GREEN}/>
    </g>
  </svg>
);

const UserIcon: React.FC<IconProps> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M7.99992 1.33331C4.31992 1.33331 1.33325 4.31998 1.33325 7.99998C1.33325 11.68 4.31992 14.6666 7.99992 14.6666C11.6799 14.6666 14.6666 11.68 14.6666 7.99998C14.6666 4.31998 11.6799 1.33331 7.99992 1.33331ZM4.71325 12.1866C4.99992 11.5866 6.74658 11 7.99992 11C9.25325 11 11.0066 11.5866 11.2866 12.1866C10.3799 12.9066 9.23992 13.3333 7.99992 13.3333C6.75992 13.3333 5.61992 12.9066 4.71325 12.1866ZM7.99992 9.66665C8.97325 9.66665 11.2866 10.06 12.2399 11.22C12.9199 10.3266 13.3333 9.21331 13.3333 7.99998C13.3333 5.05998 10.9399 2.66665 7.99992 2.66665C5.05992 2.66665 2.66659 5.05998 2.66659 7.99998C2.66659 9.21331 3.07992 10.3266 3.75992 11.22C4.71325 10.06 7.02659 9.66665 7.99992 9.66665ZM7.99992 3.99998C6.70658 3.99998 5.66658 5.03998 5.66658 6.33331C5.66658 7.62665 6.70658 8.66665 7.99992 8.66665C9.29325 8.66665 10.3333 7.62665 10.3333 6.33331C10.3333 5.03998 9.29325 3.99998 7.99992 3.99998ZM6.99992 6.33331C6.99992 6.88665 7.44659 7.33331 7.99992 7.33331C8.55325 7.33331 8.99992 6.88665 8.99992 6.33331C8.99992 5.77998 8.55325 5.33331 7.99992 5.33331C7.44659 5.33331 6.99992 5.77998 6.99992 6.33331Z"
            fill="#007079"/>
    </mask>
    <g mask="url(#mask1)">
      <rect width="16" height="16" fill={Color.GREEN}/>
    </g>
  </svg>
);

const HomeIcon: React.FC<IconProps> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M1.33331 8.33331L7.99998 2.33331L14.6666 8.33331H12.6666V13.6666H8.66665V9.66665H7.33331V13.6666H3.33331V8.33331H1.33331ZM11.3333 7.12665L7.99998 4.12665L4.66665 7.12665V12.3333H5.99998V8.33331H9.99998V12.3333H11.3333V7.12665Z"
            fill="#007079"/>
    </mask>
    <g mask="url(#mask2)">
      <rect width="16" height="16" fill="#6F6F6F"/>
    </g>
  </svg>
);

const ResultIcon: React.FC<IconProps> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M13 2.33331L12 1.33331L11 2.33331L10 1.33331L9 2.33331L8 1.33331L7 2.33331L6 1.33331L5 2.33331L4 1.33331L3 2.33331L2 1.33331V14.6666L3 13.6666L4 14.6666L5 13.6666L6 14.6666L7 13.6666L8 14.6666L9 13.6666L10 14.6666L11 13.6666L12 14.6666L13 13.6666L14 14.6666V1.33331L13 2.33331ZM3.33333 12.7266V3.27331H12.6667V12.7266H3.33333ZM12 11.3333V9.99998H4V11.3333H12ZM12 7.33331V8.66665H4V7.33331H12ZM12 5.99998V4.66665H4V5.99998H12Z"
            fill="#007079"/>
    </mask>
    <g mask="url(#mask4)">
      <rect width="16" height="16" fill="#6F6F6F"/>
    </g>
  </svg>
);

const CalculatorIcon: React.FC<IconProps> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M2.66669 2.00002C2.66669 1.26669 3.26669 0.666687 4.00002 0.666687C4.73335 0.666687 5.33335 1.26669 5.33335 2.00002C5.33335 2.73335 4.73335 3.33335 4.00002 3.33335C3.26669 3.33335 2.66669 2.73335 2.66669 2.00002ZM6.66669 14C6.66669 13.2667 7.26669 12.6667 8.00002 12.6667C8.73335 12.6667 9.33335 13.2667 9.33335 14C9.33335 14.7334 8.73335 15.3334 8.00002 15.3334C7.26669 15.3334 6.66669 14.7334 6.66669 14ZM4.00002 4.66669C3.26669 4.66669 2.66669 5.26669 2.66669 6.00002C2.66669 6.73335 3.26669 7.33335 4.00002 7.33335C4.73335 7.33335 5.33335 6.73335 5.33335 6.00002C5.33335 5.26669 4.73335 4.66669 4.00002 4.66669ZM2.66669 10C2.66669 9.26669 3.26669 8.66669 4.00002 8.66669C4.73335 8.66669 5.33335 9.26669 5.33335 10C5.33335 10.7334 4.73335 11.3334 4.00002 11.3334C3.26669 11.3334 2.66669 10.7334 2.66669 10ZM12 3.33335C12.7334 3.33335 13.3334 2.73335 13.3334 2.00002C13.3334 1.26669 12.7334 0.666687 12 0.666687C11.2667 0.666687 10.6667 1.26669 10.6667 2.00002C10.6667 2.73335 11.2667 3.33335 12 3.33335ZM6.66669 10C6.66669 9.26669 7.26669 8.66669 8.00002 8.66669C8.73335 8.66669 9.33335 9.26669 9.33335 10C9.33335 10.7334 8.73335 11.3334 8.00002 11.3334C7.26669 11.3334 6.66669 10.7334 6.66669 10ZM12 8.66669C11.2667 8.66669 10.6667 9.26669 10.6667 10C10.6667 10.7334 11.2667 11.3334 12 11.3334C12.7334 11.3334 13.3334 10.7334 13.3334 10C13.3334 9.26669 12.7334 8.66669 12 8.66669ZM10.6667 6.00002C10.6667 5.26669 11.2667 4.66669 12 4.66669C12.7334 4.66669 13.3334 5.26669 13.3334 6.00002C13.3334 6.73335 12.7334 7.33335 12 7.33335C11.2667 7.33335 10.6667 6.73335 10.6667 6.00002ZM8.00002 4.66669C7.26669 4.66669 6.66669 5.26669 6.66669 6.00002C6.66669 6.73335 7.26669 7.33335 8.00002 7.33335C8.73335 7.33335 9.33335 6.73335 9.33335 6.00002C9.33335 5.26669 8.73335 4.66669 8.00002 4.66669ZM6.66669 2.00002C6.66669 1.26669 7.26669 0.666687 8.00002 0.666687C8.73335 0.666687 9.33335 1.26669 9.33335 2.00002C9.33335 2.73335 8.73335 3.33335 8.00002 3.33335C7.26669 3.33335 6.66669 2.73335 6.66669 2.00002Z"
            fill="#007079"/>
    </mask>
    <g mask="url(#mask3)">
      <rect width="16" height="16" fill="#6F6F6F"/>
    </g>
  </svg>
);

export enum Icon {
  MENU = 'menu',
  USER = 'user',
  HOME = 'home',
  CALCULATOR = 'calculator',
  RESULT = 'result',
}

export const EquinorIcon: React.FunctionComponent<IProps> = (props) => {
  const {
    icon,
    size,
  } = props;
  switch (icon) {
    case Icon.MENU:
      return <MenuIcon size={size}/>;
    case Icon.USER:
      return <UserIcon size={size}/>;
    case Icon.HOME:
      return <HomeIcon size={size}/>;
    case Icon.CALCULATOR:
      return <CalculatorIcon size={size}/>;
    case Icon.RESULT:
      return <ResultIcon size={size}/>;
    default:
      throw Error('Unknown icon');
  }
};

EquinorIcon.defaultProps = {
  size: 16,
};