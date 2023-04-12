import styled from "styled-components";
import NewSVG from '../../assets/newAsset.svg'
import BestSellersSVG from '../../assets/bestsellersAsset.svg'
import ClassicsSVG from '../../assets/classicsAsset.svg'
import DrinksSVG from '../../assets/drinksAsset.svg'
export const CategoryContainer = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  margin: 0.5em;
  justify-content: center;
`

export const TitleHeaderImage = styled.div`
  width: 150px;
  height: 35px;
  background-image: ${prop => 
    prop.title === 'New' ? 
    `url(${NewSVG})` : 
    prop.title === 'Best Sellers' ?
    `url(${BestSellersSVG})` : 
    prop.title === 'Classics' ?
    `url(${ClassicsSVG})` : 
    `url(${DrinksSVG})`
  };
  background-repeat: no-repeat;
  background-position: center center;
`
export const Title = styled.label`
  font-family: 'Pacifico', cursive;
  color: #FA4445;
  text-shadow: 1px 1px black;
  font-size: 1.8em;
`
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const CardsContainer = styled.label`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`