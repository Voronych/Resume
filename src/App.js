import React, { Component } from "react";
import { GlobalStyle } from "./global-styles";
import styled from "styled-components";
import ScreenSizeWatcher from "./ui/pages/size-watcher";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <ScreenSizeWatcher />
      </AppContainer>
    );
  }
}

export default App;
const AppContainer = styled.div`

  height: 100%;
`;