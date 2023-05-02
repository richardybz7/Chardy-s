import styled from "styled-components";
import { motion } from "framer-motion";
import CategoryAsset1 from '../../assets/CategoryAsset1.svg'
import CategoryAsset2 from '../../assets/CategoryAsset2.svg'
export const CategoryContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1, transition:{delay: 0.3}},
  exit:{opacity: 0},
})`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  margin: 0.5em;
  justify-content: center;
`
export const Title = styled.label`
  font-family: var(--font-family2);
  color: var(--color1);
  text-shadow: 1px 1px black;
  font-size: 1.8em;
  position: relative;
  z-index: 1;
`
export const TitleAssetLeft = styled.div`
  background-image: url(${CategoryAsset1});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 30px;
  width: 50px;
  position: relative;
  z-index: 1;
`
export const TitleAssetRight = styled.div`
  background-image: url(${CategoryAsset2});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 30px;
  width: 50px;
  padding-left: 0.1em;
  position: relative;
  z-index: 1;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid var(--color1);
  box-shadow: 0 0 0 5px var(--background-color);
  border-radius: 2em;
  padding: 0 1em;
  margin: 1em 0;
  background-color: var(--background-color);
`
export const TitleParentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`