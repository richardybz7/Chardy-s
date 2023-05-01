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
                For over months of learning <DetailLabelCustom>React web development</DetailLabelCustom>, Richard Ybañez keeps getting hungry and has always been craving for freshly baked, moist, and soft donuts. This part is where most companies put inspirational journey stories, I don't have one, I'm just hungry.
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