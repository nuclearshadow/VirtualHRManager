import logo from './logo.svg';

import './App.css';
import Home from './Components/Home';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
    </>
  );
}

export default App;
