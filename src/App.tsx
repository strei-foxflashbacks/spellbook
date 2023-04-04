import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import FormPage from './pages/FormPage';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
