import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Food from './components/Food Menu/Food';

function App() {
  return (
    <div>
      Hello World
      <Navigation />
      <Main />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
