export interface DefaultTheme {
  borderColors: {
    default: string;
    focus: string;
    warning: string;
    levelCard: string;
  };
  backgroundColors: {
    primary: string;
    secondary: string;
    modal: string;
    cardWrapper: string;
    card: string;
    cardHeader: string;
    darkBlue: string;
    scrollGrey: string;
    buttons: {
      primary: string;
      warning: string;
      hover: string;
      divider: string;
    };
    labels: {
      success: string;
      warning: string;
      error: string;
      default: string;
    };
    tabs: {
      default: string;
      selected: string;
    };
    navigation: {
      default: string;
      active: string;
    };
  };
  textColors: {
    primary: string;
    warning: string;
    success: string;
    default: string;
    link: string;
    dullBlue: string;
    darkBlue: string;
  };

  iconColors: {
    gray: string;
  };
}
