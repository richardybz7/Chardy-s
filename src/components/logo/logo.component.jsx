import { LogoContainer } from "./logo.styles";
import { ChardyLogo } from "./logo.styles";
const Logo = ({to, location, cursor}) => {
  const enableLink = (e) => {
    if(location == '/'){
      e.preventDefault();
    }
  }
  return (
    <LogoContainer 
      to={to} 
      onClick={(e) => enableLink(e)} 
      cursor={cursor === 'default' ? 'default' : 'cursor'}>
      <ChardyLogo/>
    </LogoContainer>
  )
}

export default Logo;