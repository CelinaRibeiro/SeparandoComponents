import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App() {

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox frasePadrao="Faça sua busca" /> <br/><br/>
      <SearchBox frasePadrao="Digite seu nome" /><br/><br/>
      <SearchBox  />
    </>
  );
}

export default App;
