import React from "react";
import { EColor } from '../../common/Color';

export interface IProps {
  icon: EIcon,
  size?: number,
}

interface IconProps {
  size?: number,
}

const MenuIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M2 5.33333V4H14V5.33333H2ZM2 8.66667H14V7.33333H2V8.66667ZM2 12H14V10.6667H2V12Z" fill="#007079" />
    </mask>
    <g mask="url(#mask0)">
      <rect width="16" height="16" fill={EColor.GREEN} />
    </g>
  </svg>
);

const UserIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M7.99992 1.33331C4.31992 1.33331 1.33325 4.31998 1.33325 7.99998C1.33325 11.68 4.31992 14.6666 7.99992 14.6666C11.6799 14.6666 14.6666 11.68 14.6666 7.99998C14.6666 4.31998 11.6799 1.33331 7.99992 1.33331ZM4.71325 12.1866C4.99992 11.5866 6.74658 11 7.99992 11C9.25325 11 11.0066 11.5866 11.2866 12.1866C10.3799 12.9066 9.23992 13.3333 7.99992 13.3333C6.75992 13.3333 5.61992 12.9066 4.71325 12.1866ZM7.99992 9.66665C8.97325 9.66665 11.2866 10.06 12.2399 11.22C12.9199 10.3266 13.3333 9.21331 13.3333 7.99998C13.3333 5.05998 10.9399 2.66665 7.99992 2.66665C5.05992 2.66665 2.66659 5.05998 2.66659 7.99998C2.66659 9.21331 3.07992 10.3266 3.75992 11.22C4.71325 10.06 7.02659 9.66665 7.99992 9.66665ZM7.99992 3.99998C6.70658 3.99998 5.66658 5.03998 5.66658 6.33331C5.66658 7.62665 6.70658 8.66665 7.99992 8.66665C9.29325 8.66665 10.3333 7.62665 10.3333 6.33331C10.3333 5.03998 9.29325 3.99998 7.99992 3.99998ZM6.99992 6.33331C6.99992 6.88665 7.44659 7.33331 7.99992 7.33331C8.55325 7.33331 8.99992 6.88665 8.99992 6.33331C8.99992 5.77998 8.55325 5.33331 7.99992 5.33331C7.44659 5.33331 6.99992 5.77998 6.99992 6.33331Z"
        fill="#007079" />
    </mask>
    <g mask="url(#mask1)">
      <rect width="16" height="16" fill={EColor.GREEN} />
    </g>
  </svg>
);

const HomeIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M1.33331 8.33331L7.99998 2.33331L14.6666 8.33331H12.6666V13.6666H8.66665V9.66665H7.33331V13.6666H3.33331V8.33331H1.33331ZM11.3333 7.12665L7.99998 4.12665L4.66665 7.12665V12.3333H5.99998V8.33331H9.99998V12.3333H11.3333V7.12665Z"
        fill="#007079" />
    </mask>
    <g mask="url(#mask2)">
      <rect width="16" height="16" fill="#6F6F6F" />
    </g>
  </svg>
);

const ResultIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M13 2.33331L12 1.33331L11 2.33331L10 1.33331L9 2.33331L8 1.33331L7 2.33331L6 1.33331L5 2.33331L4 1.33331L3 2.33331L2 1.33331V14.6666L3 13.6666L4 14.6666L5 13.6666L6 14.6666L7 13.6666L8 14.6666L9 13.6666L10 14.6666L11 13.6666L12 14.6666L13 13.6666L14 14.6666V1.33331L13 2.33331ZM3.33333 12.7266V3.27331H12.6667V12.7266H3.33333ZM12 11.3333V9.99998H4V11.3333H12ZM12 7.33331V8.66665H4V7.33331H12ZM12 5.99998V4.66665H4V5.99998H12Z"
        fill="#007079" />
    </mask>
    <g mask="url(#mask4)">
      <rect width="16" height="16" fill="#6F6F6F" />
    </g>
  </svg>
);

const CalculatorIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M2.66669 2.00002C2.66669 1.26669 3.26669 0.666687 4.00002 0.666687C4.73335 0.666687 5.33335 1.26669 5.33335 2.00002C5.33335 2.73335 4.73335 3.33335 4.00002 3.33335C3.26669 3.33335 2.66669 2.73335 2.66669 2.00002ZM6.66669 14C6.66669 13.2667 7.26669 12.6667 8.00002 12.6667C8.73335 12.6667 9.33335 13.2667 9.33335 14C9.33335 14.7334 8.73335 15.3334 8.00002 15.3334C7.26669 15.3334 6.66669 14.7334 6.66669 14ZM4.00002 4.66669C3.26669 4.66669 2.66669 5.26669 2.66669 6.00002C2.66669 6.73335 3.26669 7.33335 4.00002 7.33335C4.73335 7.33335 5.33335 6.73335 5.33335 6.00002C5.33335 5.26669 4.73335 4.66669 4.00002 4.66669ZM2.66669 10C2.66669 9.26669 3.26669 8.66669 4.00002 8.66669C4.73335 8.66669 5.33335 9.26669 5.33335 10C5.33335 10.7334 4.73335 11.3334 4.00002 11.3334C3.26669 11.3334 2.66669 10.7334 2.66669 10ZM12 3.33335C12.7334 3.33335 13.3334 2.73335 13.3334 2.00002C13.3334 1.26669 12.7334 0.666687 12 0.666687C11.2667 0.666687 10.6667 1.26669 10.6667 2.00002C10.6667 2.73335 11.2667 3.33335 12 3.33335ZM6.66669 10C6.66669 9.26669 7.26669 8.66669 8.00002 8.66669C8.73335 8.66669 9.33335 9.26669 9.33335 10C9.33335 10.7334 8.73335 11.3334 8.00002 11.3334C7.26669 11.3334 6.66669 10.7334 6.66669 10ZM12 8.66669C11.2667 8.66669 10.6667 9.26669 10.6667 10C10.6667 10.7334 11.2667 11.3334 12 11.3334C12.7334 11.3334 13.3334 10.7334 13.3334 10C13.3334 9.26669 12.7334 8.66669 12 8.66669ZM10.6667 6.00002C10.6667 5.26669 11.2667 4.66669 12 4.66669C12.7334 4.66669 13.3334 5.26669 13.3334 6.00002C13.3334 6.73335 12.7334 7.33335 12 7.33335C11.2667 7.33335 10.6667 6.73335 10.6667 6.00002ZM8.00002 4.66669C7.26669 4.66669 6.66669 5.26669 6.66669 6.00002C6.66669 6.73335 7.26669 7.33335 8.00002 7.33335C8.73335 7.33335 9.33335 6.73335 9.33335 6.00002C9.33335 5.26669 8.73335 4.66669 8.00002 4.66669ZM6.66669 2.00002C6.66669 1.26669 7.26669 0.666687 8.00002 0.666687C8.73335 0.666687 9.33335 1.26669 9.33335 2.00002C9.33335 2.73335 8.73335 3.33335 8.00002 3.33335C7.26669 3.33335 6.66669 2.73335 6.66669 2.00002Z"
        fill="#007079" />
    </mask>
    <g mask="url(#mask3)">
      <rect width="16" height="16" fill="#6F6F6F" />
    </g>
  </svg>
);

const CheckboxOn: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.60083 0.696777H16.6008C17.7008 0.696777 18.6008 1.59678 18.6008 2.69678V16.6968C18.6008 17.7968 17.7008 18.6968 16.6008 18.6968H2.60083C1.50083 18.6968 0.60083 17.7968 0.60083 16.6968V2.69678C0.60083 1.59678 1.50083 0.696777 2.60083 0.696777ZM6.90083 13.9868C7.29083 14.3768 7.92083 14.3768 8.31083 13.9868L15.8908 6.39678C16.2808 6.00678 16.2808 5.37678 15.8908 4.98678C15.5008 4.59678 14.8708 4.59678 14.4808 4.98678L7.60083 11.8668L4.72083 8.98678C4.33083 8.59678 3.70083 8.59678 3.31083 8.98678C3.12358 9.17361 3.01834 9.42726 3.01834 9.69178C3.01834 9.9563 3.12358 10.2099 3.31083 10.3968L6.90083 13.9868Z" fill="#007079" />
  </svg>
);

const CheckboxOff: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.60083 0.696777H16.6008C17.7008 0.696777 18.6008 1.59678 18.6008 2.69678V16.6968C18.6008 17.7968 17.7008 18.6968 16.6008 18.6968H2.60083C1.50083 18.6968 0.60083 17.7968 0.60083 16.6968V2.69678C0.60083 1.59678 1.50083 0.696777 2.60083 0.696777ZM3.60083 16.6968H15.6008C16.1508 16.6968 16.6008 16.2468 16.6008 15.6968V3.69678C16.6008 3.14678 16.1508 2.69678 15.6008 2.69678H3.60083C3.05083 2.69678 2.60083 3.14678 2.60083 3.69678V15.6968C2.60083 16.2468 3.05083 16.6968 3.60083 16.6968Z" fill="#007079" />
  </svg>
);

const Submit: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask5" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="-1" width="17" height="17">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.84595 6.66642L1.85261 1.99976L15.8459 7.99976L1.85261 13.9998L1.84595 9.33309L11.8459 7.99976L1.84595 6.66642ZM3.18595 4.01976L8.19261 6.16642L3.17928 5.49976L3.18595 4.01976ZM8.18595 9.83309L3.17928 11.9798V10.4998L8.18595 9.83309Z" fill="#007079" />
    </mask>
    <g mask="url(#mask5)">
      <rect x="0.845947" y="-0.000244141" width="16" height="16" fill="white" />
    </g>
  </svg>
);

const Loading: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.84615C6.39219 1.84615 1.84615 6.39219 1.84615 12C1.84615 17.6078 6.39219 22.1538 12 22.1538C17.6078 22.1538 22.1538 17.6078 22.1538 12C22.1538 6.39219 17.6078 1.84615 12 1.84615ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#DEEDEE" />
    <path fillRule="evenodd" clipRule="evenodd" d="M3.26622 19.1615C3.62672 18.79 4.21764 18.7835 4.58608 19.1471C5.77978 20.3249 7.25115 21.1956 8.87067 21.6804C10.4902 22.1651 12.2065 22.2484 13.8669 21.9225C15.5272 21.5966 17.0788 20.8721 18.3845 19.8147C19.6902 18.7575 20.7095 17.4005 21.354 15.8651C21.9985 14.3299 22.249 12.6625 22.0841 11.0103C21.9191 9.35803 21.3437 7.76994 20.407 6.38681C19.4703 5.00356 18.2008 3.86748 16.7095 3.08099C15.2181 2.29444 13.5519 1.88235 11.8586 1.88235C11.3432 1.88235 10.9253 1.46097 10.9253 0.941176C10.9253 0.421379 11.3432 -4.54098e-07 11.8586 -4.76629e-07C13.8517 -5.63749e-07 15.8149 0.484934 17.5746 1.41299C19.3344 2.34109 20.8372 3.68426 21.9485 5.32528C23.0599 6.96643 23.7449 8.8543 23.9413 10.8218C24.1377 12.7893 23.8392 14.7738 23.073 16.5989C22.3068 18.424 21.0972 20.0322 19.5533 21.2824C18.0095 22.5326 16.1787 23.3864 14.2235 23.7702C12.2684 24.1539 10.2476 24.056 8.33952 23.4849C6.43142 22.9138 4.69353 21.8866 3.28059 20.4925C2.91215 20.129 2.90572 19.5331 3.26622 19.1615Z" fill="#007079" />
  </svg>
)

const Error: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.66659 1.27334L8.72659 0.333344L4.99992 4.06001L1.27325 0.333344L0.333252 1.27334L4.05992 5.00001L0.333252 8.72668L1.27325 9.66668L4.99992 5.94001L8.72659 9.66668L9.66659 8.72668L5.93992 5.00001L9.66659 1.27334Z" fill="#EB0000" />
  </svg>
)

const Info: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5H11V7H9V5Z" fill="#007079" />
    <path d="M9 9H11V15H9V9Z" fill="#007079" />
    <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.48 4.47998 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.47998 20 0 15.52 0 10ZM2 10C2 14.41 5.58997 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C5.58997 2 2 5.59 2 10Z" fill="#007079" />
  </svg>
)

const InBox: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.8564 0H2.85645C1.75645 0 0.856445 0.9 0.856445 2V16C0.856445 17.1 1.74645 18 2.85645 18H16.8564C17.9564 18 18.8564 17.1 18.8564 16V2C18.8564 0.9 17.9564 0 16.8564 0ZM16.8564 16H2.85645V13H6.41645C7.10645 14.19 8.38645 15 9.86645 15C11.3464 15 12.6164 14.19 13.3164 13H16.8564V16ZM11.8664 11H16.8564V2H2.85645V11H7.86645C7.86645 12.1 8.76645 13 9.86645 13C10.9664 13 11.8664 12.1 11.8664 11Z" fill="#007079" />
  </svg>
)

export enum EIcon {
  MENU = 'menu',
  USER = 'user',
  HOME = 'home',
  CALCULATOR = 'calculator',
  RESULT = 'result',
  CHECKBOX_ON = 'checkbox_on',
  CHECKBOX_OFF = 'checkbox_off',
  SUBMIT = 'submit',
  LOADING = 'loading',
  ERROR = 'error',
  INFO = 'info',
  INBOX = 'inbox'
}

export const EquinorIcon: React.FunctionComponent<IProps> = (props) => {
  const {
    icon,
    size,
  } = props;
  switch (icon) {
    case EIcon.MENU:
      return <MenuIcon size={size} />;
    case EIcon.USER:
      return <UserIcon size={size} />;
    case EIcon.HOME:
      return <HomeIcon size={size} />;
    case EIcon.CALCULATOR:
      return <CalculatorIcon size={size} />;
    case EIcon.RESULT:
      return <ResultIcon size={size} />;
    case EIcon.CHECKBOX_ON:
      return <CheckboxOn size={size} />;
    case EIcon.CHECKBOX_OFF:
      return <CheckboxOff size={size} />;
    case EIcon.SUBMIT:
      return <Submit size={size} />;
    case EIcon.LOADING:
      return <Loading size={size} />;
    case EIcon.ERROR:
      return <Error size={size} />;
    case EIcon.INFO:
      return <Info size={size} />;
    case EIcon.INBOX:
      return <InBox size={size} />;
    default:
      throw Error;
  }
};

EquinorIcon.defaultProps = {
  size: 16,
};