// import React from 'react';
import { styled } from '@mui/system';
import './App.css';
import LoginPortal from './components/LoginPortal';

const Container = styled('div')({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F8FDFF",
  fontFamily: 'Poppins, sans-serif',
})


function App() {
  return (
    <Container>
      <LoginPortal />
    </Container>
  );
}

export default App;
