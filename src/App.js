import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import Authentication from "./routes/authentication/authentication.route";
import Checkout from "./routes/checkout/checkout.route";
import MyPurchases from "./routes/myPurchases/myPurchases.route";
import NotFound from "./routes/notFound/notFound.route";
import Products from "./routes/products/products.route";
import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='products/*' element={<Products/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='myPurchases' element={<MyPurchases/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
