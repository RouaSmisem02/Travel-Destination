import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import '@fortawesome/fontawesome-free/css/all.css';
import TourDetails from './components/TourDetails/TourDetails';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/city/:id' element={<TourDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
