import styled from "styled-components";
import { motion } from "framer-motion";

export const AuthenticationContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5rem;
  gap: 5em;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1000px;

  @media all and (max-width: 1060px){
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3em;
  }

  @media all and (max-width: 660px){
    padding: 0.2rem;
  }
`
