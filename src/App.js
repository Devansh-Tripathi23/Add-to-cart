import "./App.css";
import Products from "./pages/Products";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/productDetails" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
