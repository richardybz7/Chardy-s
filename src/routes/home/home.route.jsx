import Banner from "../../components/banner/banner.component";
import Products from "../products/products.route";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";
const Home = () => {
  return (
    <Fragment>
      <Banner/>
      <Products/>
      <Footer/>
    </Fragment>
  )
}

export default Home;