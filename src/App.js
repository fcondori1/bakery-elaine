import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Food from './components/Food Menu/Food';
import Order from './components/Order/Order';
import About from './components/About/About';

function App() {
	return (
		<div>
			Hello World
			<Navigation />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/food' element={<Food />} />
				<Route path='/order' element={<Order />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
