import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Search from './pages/Search';
import Carrito from './pages/Carrito';
import Error404 from './pages/Error404';
import Layout from './components/Layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
