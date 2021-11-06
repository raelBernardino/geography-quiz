// import React from 'react';
import { styled } from '@mui/system';
import './App.css';

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
      <h1>geogrow</h1>
    </Container>
  );
}

export default App;
