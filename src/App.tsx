import React from 'react';
import styled from 'styled-components';
import './App.css';
import LoginPortal from './components/LoginPortal';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8FDFF;
  font-family: 'Poppins', sans-serif;
`;

function App() {
  return (
    <Container>
      <LoginPortal />
      {/* <h1>geogrow</h1> */}
    </Container>
  );
}

export default App;
