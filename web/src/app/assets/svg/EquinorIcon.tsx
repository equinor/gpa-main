import React from 'react';

export interface IProps {
  icon: EIcon,
  size?: number,
}

interface IconProps {
  size?: number,
}

const MenuIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" fill="#007079" />
  </svg>
);

const UserIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM10 12.5C11.46 12.5 14.93 13.09 16.36 14.83C17.38 13.49 18 11.82 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10C2 11.82 2.62 13.49 3.64 14.83C5.07 13.09 8.54 12.5 10 12.5ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM8.5 7.5C8.5 8.33 9.17 9 10 9C10.83 9 11.5 8.33 11.5 7.5C11.5 6.67 10.83 6 10 6C9.17 6 8.5 6.67 8.5 7.5Z" fill="#007079" />
  </svg>
);

const HomeIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="#007079" />
  </svg>
);

const ResultIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0L1.5 1.5L0 0V20L1.5 18.5L3 20L4.5 18.5L6 20L7.5 18.5L9 20L10.5 18.5L12 20L13.5 18.5L15 20L16.5 18.5L18 20V0L16.5 1.5ZM2 17.09V2.91H16V17.09H2ZM15 15V13H3V15H15ZM15 9V11H3V9H15ZM15 7V5H3V7H15Z" fill="#007079" />
  </svg>
);

const CalculatorIcon: React.FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.856445 2C0.856445 0.9 1.75645 0 2.85645 0C3.95645 0 4.85645 0.9 4.85645 2C4.85645 3.1 3.95645 4 2.85645 4C1.75645 4 0.856445 3.1 0.856445 2ZM6.85645 20C6.85645 18.9 7.75645 18 8.85645 18C9.95645 18 10.8564 18.9 10.8564 20C10.8564 21.1 9.95645 22 8.85645 22C7.75645 22 6.85645 21.1 6.85645 20ZM2.85645 6C1.75645 6 0.856445 6.9 0.856445 8C0.856445 9.1 1.75645 10 2.85645 10C3.95645 10 4.85645 9.1 4.85645 8C4.85645 6.9 3.95645 6 2.85645 6ZM0.856445 14C0.856445 12.9 1.75645 12 2.85645 12C3.95645 12 4.85645 12.9 4.85645 14C4.85645 15.1 3.95645 16 2.85645 16C1.75645 16 0.856445 15.1 0.856445 14ZM14.8564 4C15.9564 4 16.8564 3.1 16.8564 2C16.8564 0.9 15.9564 0 14.8564 0C13.7564 0 12.8564 0.9 12.8564 2C12.8564 3.1 13.7564 4 14.8564 4ZM6.85645 14C6.85645 12.9 7.75645 12 8.85645 12C9.95645 12 10.8564 12.9 10.8564 14C10.8564 15.1 9.95645 16 8.85645 16C7.75645 16 6.85645 15.1 6.85645 14ZM14.8564 12C13.7564 12 12.8564 12.9 12.8564 14C12.8564 15.1 13.7564 16 14.8564 16C15.9564 16 16.8564 15.1 16.8564 14C16.8564 12.9 15.9564 12 14.8564 12ZM12.8564 8C12.8564 6.9 13.7564 6 14.8564 6C15.9564 6 16.8564 6.9 16.8564 8C16.8564 9.1 15.9564 10 14.8564 10C13.7564 10 12.8564 9.1 12.8564 8ZM8.85645 6C7.75645 6 6.85645 6.9 6.85645 8C6.85645 9.1 7.75645 10 8.85645 10C9.95645 10 10.8564 9.1 10.8564 8C10.8564 6.9 9.95645 6 8.85645 6ZM6.85645 2C6.85645 0.9 7.75645 0 8.85645 0C9.95645 0 10.8564 0.9 10.8564 2C10.8564 3.1 9.95645 4 8.85645 4C7.75645 4 6.85645 3.1 6.85645 2Z" fill="#007079" />
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
  <svg width={size} height={size} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 7L0.51 0L21.5 9L0.51 18L0.5 11L15.5 9L0.5 7ZM2.51 3.03L10.02 6.25L2.5 5.25L2.51 3.03ZM10.01 11.75L2.5 14.97V12.75L10.01 11.75Z" fill="#007079" />
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