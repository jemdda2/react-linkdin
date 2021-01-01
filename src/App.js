import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { login, logout, selectUser } from './features/userSlice';

import Feed from './Feed';
import { auth } from './firebase/firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import GlobalStyle from './styles/GlobalStyle';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) =>{
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.profileUrl,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

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
            <Widgets />
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
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
`;
