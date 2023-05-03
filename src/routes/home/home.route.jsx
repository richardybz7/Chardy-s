import Banner from "../../components/banner/banner.component";
import Products from "../../components/products/products.component";
import Footer from "../../components/footer/footer.component";
import { HomeParentContainer } from "./home.styles";
import { CloseBasket } from "../../utils/basket/basket.utils";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/basket/basket.selector";
const Home = () => {
  const dispatch = useDispatch()
  const isBasketOpen = useSelector(selectIsCartOpen)
  const closeBasket = CloseBasket(dispatch, isBasketOpen)
  return (
    <HomeParentContainer onClick={closeBasket}>
      <Banner/>
      <Products/>
      <Footer/>
    </HomeParentContainer>
  )
}

export default Home;