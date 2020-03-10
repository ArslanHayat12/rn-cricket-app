/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { withTheme } from "styled-components";
import { TextStyle } from "./style";

const Card = ({ theme }: any) => {
  const { toggleMode } = theme;
  return (
    <TextStyle onPress={() => toggleMode && toggleMode()}>Hello</TextStyle>
  );
};
export default withTheme(Card);
