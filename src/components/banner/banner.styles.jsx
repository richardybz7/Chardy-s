import styled from "styled-components";
import BannerImg from '../../assets/banner1.jpg'
import { motion } from "framer-motion";

export const BannerContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
  display: flex;
`
export const BannerImage = styled.img.attrs({
  src: BannerImg
})`
  width: 100%;
`
