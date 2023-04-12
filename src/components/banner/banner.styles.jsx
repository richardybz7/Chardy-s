import styled from "styled-components";
import BannerImg from '../../assets/banner1.jpg'

export const BannerContainer = styled.div`
  display: flex;
`
export const BannerImage = styled.img.attrs({
  src: BannerImg
})`
  width: 100%;
`
