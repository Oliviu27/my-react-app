import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const FrontPage = styled.div`
  min-height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
`;

function App() {
  return (
    <FrontPage>
      <Header/>
      <Content/>
      <Footer/>
    </FrontPage>
  );
}

export default App;
