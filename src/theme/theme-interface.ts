import { DefaultTheme } from "./theme";

const PRIMARY_COLOR_LIGHT = "#35a4ff";
const PRIMARY_COLOR_DARK = "#35a4ff";

const DANGER_COLOR_LIGHT = "#ff3d3d";
const DANGER_COLOR_DARK = "#ff3d3d";

export const light: DefaultTheme = {
  borderColors: {
    default: "#dcdcdc",
    focus: PRIMARY_COLOR_LIGHT,
    warning: DANGER_COLOR_LIGHT,
    levelCard: "#eeeff4",
  },
  backgroundColors: {
    primary: "#fcfdff",
    secondary: "#1a214b",
    modal: "#fff",
    cardWrapper: "#eef7fc",
    card: "#fff",
    cardHeader: "#d9ecf6",
    darkBlue: "#0a579b",
    scrollGrey: "#ebebeb",
    buttons: {
      primary: PRIMARY_COLOR_LIGHT,
      warning: "#ff3d3d",
      hover: "#e3ebef",
      divider: " #dae3eb",
    },
    tabs: {
      default: "#dcdcdc",
      selected: PRIMARY_COLOR_LIGHT,
    },
    labels: {
      success: "rgba(28,212,0, 0.2)",
      warning: "rgba(255, 61, 61, 0.2)",
      error: "#ff3d3d",
      default: "rgba(125,125,125, 0.2)",
    },
    navigation: {
      default: "#212a5b",
      active: "#1e3a6f",
    },
  },
  textColors: {
    primary: "#1a214b",
    warning: "#ff3d3d",
    success: "#218d11",
    default: "#7d7d7d",
    link: PRIMARY_COLOR_LIGHT,
    dullBlue: "#454f71",
    darkBlue: "#37A4FF",
  },
  iconColors: {
    gray: "#7f7f7f",
  },
};

export const dark: DefaultTheme = {
  borderColors: {
    default: "#dcdcdc",
    focus: PRIMARY_COLOR_DARK,
    warning: DANGER_COLOR_DARK,
    levelCard: "#eeeff4",
  },
  backgroundColors: {
    primary: "#fcfdff",
    secondary: "#1a214b",
    modal: "#fff",
    cardWrapper: "#eef7fc",
    card: "#fff",
    cardHeader: "#d9ecf6",
    darkBlue: "#0a579b",
    scrollGrey: "#ebebeb",
    buttons: {
      primary: PRIMARY_COLOR_DARK,
      warning: "#ff3d3d",
      hover: "#e3ebef",
      divider: " #dae3eb",
    },
    labels: {
      success: "rgba(28,212,0, 0.2)",
      warning: "rgba(255, 61, 61, 0.2)",
      error: "#ff3d3d",
      default: "rgba(125,125,125, 0.2)",
    },
    tabs: {
      default: "#dcdcdc",
      selected: PRIMARY_COLOR_DARK,
    },
    navigation: {
      default: "#202a5b",
      active: "#1e3a6f",
    },
  },
  textColors: {
    primary: "#1a214b",
    warning: "#1a214b",
    success: "#218d11",
    default: "#7d7d7d",
    link: PRIMARY_COLOR_DARK,
    dullBlue: "#454f71",
    darkBlue: "#37A4FF",
  },
  iconColors: {
    gray: "#7f7f7f",
  },
};

export const theme = {
  dark,
  light,
};
