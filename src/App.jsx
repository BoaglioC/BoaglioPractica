import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Main from './componentes/Main';
import Galeria from './componentes/Galeria';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      <Header />
      <Main />
      <Galeria />
      <Footer />
    
    </>
  )
}

export default App
