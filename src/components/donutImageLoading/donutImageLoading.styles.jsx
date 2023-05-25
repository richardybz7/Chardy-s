import styled from "styled-components";
import DonutImageLoading_ from '../../assets/DonutImageLoading.svg'
import { rotate360 } from "../spinner/spinner.styles";

export const DonutImageLoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const DonutImageLoading = styled.div`
  width: 70%;
  height: 70%;
  background-image: url(${DonutImageLoading_});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${rotate360} 20s linear infinite;
`