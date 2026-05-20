import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import BrasilPage from './pages/BrasilPage';
import JaponPage from './pages/JaponPage';
import ItaliaPage from './pages/ItaliaPage';
import MexicoPage from './pages/MexicoPage';
import AlemaniaPage from './pages/AlemaniaPage';
import ShopPage from './pages/ShopPage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brasil" element={<BrasilPage />} />
          <Route path="/japon" element={<JaponPage />} />
          <Route path="/italia" element={<ItaliaPage />} />
          <Route path="/mexico" element={<MexicoPage />} />
          <Route path="/alemania" element={<AlemaniaPage />} />
          <Route path="/tienda" element={<ShopPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/evento-detalles" element={<EventDetailsPage />} />
          {/* Add more routes here as we create new pages */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}