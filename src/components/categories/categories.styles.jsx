import styled from "styled-components";
import { motion } from "framer-motion";
export const CategoryContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1, transition:{delay: 0.2}},
  exit:{opacity: 0},
})`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  margin: 0.5em;
  justify-content: center;
`
export const Title = styled.label`
  font-family: 'Pacifico', cursive;
  color: #FA4445;
  text-shadow: 1px 1px black;
  font-size: 1.8em;
`
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`