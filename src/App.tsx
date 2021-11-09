import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './firebase'
import LoginPage from './components/LoginPage';
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
  const fetchFirebase = async () => {
    const usersColleciton = collection(db, 'Activities')
    const usersSnapshot = await getDocs(usersColleciton)
    console.log(usersSnapshot.docs.map(doc => doc.data()))
  }

  useEffect(() => {
    fetchFirebase()
  }, [])
  return (
    <Container>
      <LoginPage />
    </Container>
  );
}

export default App;
