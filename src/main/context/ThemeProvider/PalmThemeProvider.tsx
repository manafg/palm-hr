import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {PalmThemeProviderProps} from './types'

function PalmThemeProvider({children} : PalmThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default PalmThemeProvider;