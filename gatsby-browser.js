import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: { fontFamily: 'Open Sans, sans-serif' }
  })
);

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
