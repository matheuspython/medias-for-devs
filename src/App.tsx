import React from 'react';
import GlobalStyles from './styles/global'
import { Header } from './components/Header';
import { Main } from './components/Main';

const App:React.FC =() =>{
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Main />
    </div>
  );
}

export default App;
