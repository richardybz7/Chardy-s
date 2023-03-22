import { BannerContainer } from "./banner.styles";
//temporary
import BannerImg from '../../assets/banner1.jpg'
const Banner = () => {
  return (
    <>
      <BannerContainer>
        <img src={BannerImg} style={{width: '100%'}}/>
      </BannerContainer>
    </>
  )
}

export default Banner;