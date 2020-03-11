/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./theme/ThemeProvider";
import BootSplash from "react-native-bootsplash";

const App = () => {
  useEffect(() => {
    BootSplash.hide({ duration: 250 });
  }, []);

  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};
export default App;
