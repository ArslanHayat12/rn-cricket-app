import { ThemeProps as StyledComponentsThemeProps, DefaultTheme } from "styled-components";

export type ThemeProps = {
  mode: string;
  toggleMode: () => void;
} & DefaultTheme;

export type WithThemeProps = StyledComponentsThemeProps<ThemeProps>;
