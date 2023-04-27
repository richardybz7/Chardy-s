import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import Authentication from "./routes/authentication/authentication.route";
import Checkout from "./routes/checkout/checkout.route";
import MyPurchases from "./routes/myPurchases/myPurchases.route";
import NotFound from "./routes/notFound/notFound.route";
import { GlobalStyle } from "./global.styles";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
import { getProductImagesStart, getProductsStart } from "./store/products/products.action";
import { selectCurrentUser, selectIsLoading } from "./store/user/user.selector";
import Spinner from "./components/spinner/spinner.component";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const dispatch = useDispatch()
  const userIsLoading = useSelector(selectIsLoading)
  const currentUser = useSelector(selectCurrentUser)
  useEffect(() => {
    dispatch(getProductsStart())
    dispatch(getProductImagesStart())
    dispatch(checkUserSession())
  },[])
  return (
    <Fragment>
    <GlobalStyle/>
    {
      userIsLoading ? (
        <AnimatePresence>
          <Spinner/>
        </AnimatePresence>
      ):(
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route path='auth' element={<Authentication/>}/>
            <Route index element={<Home/>}/>
            {
              currentUser &&
              <Fragment>
                <Route path='checkout' element={<Checkout/>}/>
                <Route path='myPurchases' element={<MyPurchases/>}/>
              </Fragment>
            }
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      )
    }
    </Fragment>
  );
}

export default App;
