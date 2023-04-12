import { DonutImage, ParentSpinnerContainer, SpinnerContainer } from "./spinner.styles"

const Spinner = () => {
  return (
    <ParentSpinnerContainer>
      <SpinnerContainer>
        <DonutImage/>
      </SpinnerContainer>
    </ParentSpinnerContainer>
  )
}

export default Spinner