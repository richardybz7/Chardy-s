import { ReactComponent as BurgerSVG } from '../../assets/burger.svg'
import { BurgerContainer } from './burger.styles';

const Burger = () => {
  return (
    <BurgerContainer>
      <BurgerSVG/>
    </BurgerContainer>
  )
}

export default Burger;