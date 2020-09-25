import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 1rem;
  max-height: 48%;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 10%, #031230 100%);
  background-size: 320px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 5px;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 450px;
  }
`;

function App() {

  // State de frases
  const [frase, guardarFrase] = useState({});

  const consultarApi = async () => {
    const apiResponse = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await apiResponse.json();
    guardarFrase(frase[0]);
  }

  // Cargar una frase (useEffect)
  useEffect(() => {
    consultarApi()
  }, []);


  return (
    <Contenedor>
      <Frase
        frase={frase}
      />

      <Boton
        onClick={()=>consultarApi()}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
