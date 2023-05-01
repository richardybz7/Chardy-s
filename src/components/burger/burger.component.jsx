import { BurgerBunBottom, BurgerBunTop, BurgerCircle, BurgerContainer, BurgerParentContainer, BurgerPatty, BurgerSvg } from './burger.styles';

const Burger = ({onClick, displayed, notification}) => {
  return (
    <BurgerParentContainer>
      <BurgerContainer onClick={onClick} notification={notification}>
          <BurgerCircle trigger={displayed}/>
          <BurgerBunTop trigger={displayed}/>
          <BurgerPatty trigger={displayed}/>
          <BurgerBunBottom trigger={displayed}/>
      </BurgerContainer>
    </BurgerParentContainer>
  )
}

export default Burger;