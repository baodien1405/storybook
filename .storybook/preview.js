// .storybook/preview.js

import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../src/components/particles/globalStyles";
import themeDefault from "../src/components/particles/themeDefault";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
