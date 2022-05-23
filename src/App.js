import  { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Food from './components/Food Menu/Food';
import Order from './components/Order/Order';

function App() {
  return (
    <div>
      Hello World
      <Navigation />
      <Main />
      <Food />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
