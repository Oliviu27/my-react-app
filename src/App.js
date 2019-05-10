import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const FrontPage = styled.div`
  height: 100vh;
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
