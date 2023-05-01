import styled from "styled-components";
import BannerImg from '../../assets/banner5_4.png'
import BannerHeaderSVG from '../../assets/bannerHeaderAsset2.svg'
import { motion } from "framer-motion";

export const BannerParentContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
  display: flex;
  position: relative;
  z-index: 1;
  padding: 1vw;
  padding-left: 7vw;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  height: 40vw;
  @media screen and (max-width: 1080px) {
    padding: 0;
    padding-top: 3em;
    align-items: unset;
    height: 130vw;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  width: 80vw;
  max-width: 1500px;
  background-color: transparent;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`
export const BannerDetailsParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  @media screen and (max-width: 1080px) {
    align-items: center;
  }
`
export const BannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`
export const BannerHeader = styled.div`
  background-image: url(${BannerHeaderSVG});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 10vw;
  max-height: 140px;
  @media screen and (max-width: 1080px) {
    background-position: bottom center;
    height: 20vw;
  }
`
export const DetailContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 570px;
  background-color: transparent;
`
export const DetailLabelCustom = styled.label`
  color: var(--color2);
`
export const DetailLabel = styled.div`
  padding: 1.5em;
  border-radius: 3em;
  background-color: var(--background-color);
  border: 3px solid var(--color2);
  color: var(--color1);
  @media screen and (max-width: 1080px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`
export const DetailBackdrop = styled.div`
  position: absolute;
  z-index: -1;
  right: -10px;
  bottom: -10px;
  border-radius: 3em;
  background-color: var(--color2);
  width: 100%;
  height: 100%;
`
export const BannerImageParentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vw;
  @media screen and (max-width: 1080px) {
    height: 80vw;
  }
`
export const BannerImage = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 40vw;
  max-height: 766px;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 1080px) {
    background-position: center center;
    height: 80vw;
  }
`
export const BannerImageBackground = styled.div`
  position: absolute;
  height: 25vw;
  width: 25vw;
  max-height: 490px;
  max-width: 490px;
  border: 1vw solid var(--color1);
  border-radius: 4vw;
  @media screen and (min-width: 2012px) {
    border: 1.2em solid var(--color1);
  }
  @media screen and (max-width: 1080px) {
    box-shadow: 
      inset 0 0 0 0.5vw var(--background-color),
      0 0 0 0.5vw var(--background-color);
    border: 1.5vw solid var(--color1);
    height: 50vw;
    width: 50vw;
  }
`