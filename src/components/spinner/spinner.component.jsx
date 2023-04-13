import { DonutImage, LogoSvg, LogoContainer, ParentSpinnerContainer, SpinnerContainer } from "./spinner.styles"

const Spinner = () => {
  return (
    <ParentSpinnerContainer>
      <SpinnerContainer>
        <DonutImage/>
      </SpinnerContainer>
      <LogoContainer>
        <LogoSvg/>
      </LogoContainer>
    </ParentSpinnerContainer>
  )
}

export default Spinner