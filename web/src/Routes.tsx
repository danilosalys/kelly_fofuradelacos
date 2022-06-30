import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Custom from "./pages/Custom";
import Product from "./pages/Product";
import Support from "./pages/Support";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/personalize" element={<Custom />} />
        <Route path="/produto" element={<Product />} />
        <Route path="/suporte" element={<Support />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}