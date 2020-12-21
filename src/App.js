import React from 'react';
import styled from 'styled-components/macro';

import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import GlobalStyle from './styles/GlobalStyle';


function App() {
  return (
    <>
      <GlobalStyle />
        <AppMain>
          <Header />

          {/* App Body */}
          <AppBody>
            <Sidebar />
            <Feed />
            {/* Widgets */}
          </AppBody>
      </AppMain>
    </>
  );
}

export default App;

const AppMain = styled.div`
  background-color: #f3f2ef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppBody = styled.div`
  display: flex;
`;
