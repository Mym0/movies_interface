import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import Login from './components/login/Login';
import Register from './components/register/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AboutUs from './components/AboutUs/AboutUs';
import Terms from './components/Terms/Terms';

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          <Route path="/Reviews/:movieId" element={<Reviews />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
