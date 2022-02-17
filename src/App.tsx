import React from 'react';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './helpers/theme';
import {AppContainer} from './navigations';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
