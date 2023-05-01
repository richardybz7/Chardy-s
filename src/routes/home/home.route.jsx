import Banner from "../../components/banner/banner.component";
import Products from "../../components/products/products.component";
import Footer from "../../components/footer/footer.component";
import { HomeParentContainer } from "./home.styles";
const Home = () => {
  return (
    <HomeParentContainer>
      <Banner/>
      <Products/>
      <Footer/>
    </HomeParentContainer>
  )
}

export default Home;