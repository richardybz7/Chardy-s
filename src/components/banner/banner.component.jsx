import { BannerContainer, BannerDetailsContainer, BannerDetailsParentContainer, BannerImage, BannerParentContainer, DetailBackdrop, DetailContainer, DetailLabel, BannerHeader, BannerImageParentContainer, BannerImageBackground, DetailLabelCustom } from "./banner.styles";

const Banner = () => {
  return (
    <BannerParentContainer>
      <BannerContainer>
        <BannerDetailsParentContainer>
          <BannerDetailsContainer>
            <BannerHeader/>
            <DetailContainer>
              <DetailLabel>
                For over months of learning <DetailLabelCustom>React web development</DetailLabelCustom>, Richard Ybañez keeps getting hungry and has always been craving for freshly baked, moist, and soft donuts. (Who gives a crap)
              </DetailLabel>
              <DetailBackdrop/>
            </DetailContainer>
          </BannerDetailsContainer>
        </BannerDetailsParentContainer>
        <BannerImageParentContainer>
          <BannerImageBackground/>
          <BannerImage/>
        </BannerImageParentContainer>
      </BannerContainer>
    </BannerParentContainer>
  )
}

export default Banner;