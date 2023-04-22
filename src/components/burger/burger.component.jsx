import { BurgerBunBottom, BurgerBunTop, BurgerContainer, BurgerParentContainer, BurgerPatty, BurgerSvg } from './burger.styles';

const Burger = ({onClick, displayed, notification}) => {
  console.log(notification)
  return (
    <BurgerParentContainer>
      <BurgerContainer onClick={onClick} notification={notification}>
        <BurgerBunTop trigger={displayed}/>
        <BurgerPatty trigger={displayed}/>
        <BurgerBunBottom trigger={displayed}/>
      </BurgerContainer>
    </BurgerParentContainer>
  )
}

export default Burger;