import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { selectUser } from './features/userSlice';

import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const user = useSelector(selectUser)

  return (
    <>
      <GlobalStyle />
        <AppMain>
          <Header />

          {!user ? (
            <Login />
          ) : (
          <AppBody>
            <Sidebar />
            <Feed />
          </AppBody>
          )}
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
