import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Head from "./components/Head";
import Body from "./components/Body";
import TopRestaurant from "./components/TopRestaurant";
import OnlineFoodDelivery from "./components/OnlineFoodDelivery";
import RestaurantDetail from "./components/RestaurantDetail";
import CategoryPage from "./components/CategoryPage";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import Help from "./components/Help";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Head />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Body />
                <TopRestaurant />
                <OnlineFoodDelivery />
              </>
            }
          />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/category/:path" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
