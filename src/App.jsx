import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./routes/ProtectedRoute";
import GlobalStyles from "./styles/GlobalStyles";


function App() {
  return (
    <>
      <GlobalStyles />

      <AuthProvider>
        <CartProvider>
          <BrowserRouter>

            <Routes>

              <Route path="/" element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="/productos" element={<Products />} />

                <Route path="/producto/:id" element={<ProductDetail />} />

                <Route path="/carrito" element={<Cart />} />

                <Route path="/registro" element={<Register />} />

                <Route path="/login" element={<Login />} />

                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  }
                />

              </Route>

            </Routes>

          </BrowserRouter>
        </CartProvider>
      </AuthProvider>

    </>
  );
}


export default App;