import './App.css';
import { Navbar } from '../src/components/Navbar/Navbar'
import { Footer } from '../src/components/Footer/Footer'
import { Welcome } from './components/Welcome/Welcome';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
