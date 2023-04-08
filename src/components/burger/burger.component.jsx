import { BurgerContainer, BurgerSvg } from './burger.styles';

const Burger = ({onClick}) => {
  return (
    <BurgerContainer onClick={onClick}>
      <BurgerSvg/>
    </BurgerContainer>
  )
}

export default Burger;