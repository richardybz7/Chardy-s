import { useEffect, useState } from 'react';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import { LogoContainer } from "./logo.styles";

const Logo = ({to, location, cursor}) => {
  const enableLink = (e) => {
    if(location == '/'){
      e.preventDefault();
    }
  }
  return (
    <>
      <LogoContainer 
        to={to} 
        onClick={(e) => enableLink(e)} 
        cursor={cursor === 'default' ? 'default' : 'cursor'}>
        <LogoSVG/>
      </LogoContainer>
    </>
  )
}

export default Logo;