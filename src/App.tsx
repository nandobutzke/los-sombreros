
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

import './styles/global.scss';
import { Footer } from './components/Footer';
import { BackToHomeProvider } from './hooks/useBackToHome';
import { Cart } from './pages/Cart';

function App() {
  return (
    <BackToHomeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </BackToHomeProvider>
  );
}

export default App;
