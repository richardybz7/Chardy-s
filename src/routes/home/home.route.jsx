import { Outlet } from "react-router-dom";
import Banner from "../../components/banner/banner.component";
import Products from "../products/products.route";
const Home = () => {
  return (
    <div>
      <Banner/>
      <Products/>
    </div>
  )
}

export default Home;