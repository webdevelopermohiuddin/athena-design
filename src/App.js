import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Componentes/Homepage/HomePage';
import { Nav } from 'react-bootstrap';
import NavBar from './Componentes/NavBar/NavBar';
import MainHeader from './Componentes/MainHeader/MainHeader';
import Service from './Componentes/Service/Service';
import Team from './Componentes/Team/Team';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <MainHeader></MainHeader>
      <Service></Service>
      <Team></Team>
    </div>
  );
}

export default App;
