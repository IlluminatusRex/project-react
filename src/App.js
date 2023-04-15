import Home from './components/Home/Home.js';
import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Favourite from './components/Favourite/Favourite.js';
import About from './components/About/About.js';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;