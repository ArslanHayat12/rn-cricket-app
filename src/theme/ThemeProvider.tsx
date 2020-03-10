import React, { useState, useCallback, useEffect } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme } from "../theme/theme-interface";

export type ThemeProviderProps = {
  children?: React.ReactChild;
};
export const ThemeProvider = (props: ThemeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const toggleMode = useCallback(() => {
    const themeMode = mode === "dark" ? "light" : "dark";
    setMode(themeMode);
  }, [mode]);

  return (
    <StyledComponentsThemeProvider
      theme={{ ...theme[mode], toggleMode: toggleMode }}
    >
      {props.children}
    </StyledComponentsThemeProvider>
  );
};
