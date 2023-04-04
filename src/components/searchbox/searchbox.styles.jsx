import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as SearchLogoSVG } from '../../assets/search-lg1.svg'

export const ParentSearchBoxContainer = styled.div`
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
`
export const SearchBoxFormContainer = styled.form`
  border: 1px solid transparent;
  background-color: #F2F2F2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 5px 10px 5px 15px;
  transition: border 0.3s ease;
  :hover{
    border: 1px solid #FF6161;
  }
`
export const SearchBox = styled.input`
  font-family: var(--font-family);
  border: none;
  background-color: transparent;
  width: 100%;
  ::-webkit-input-placeholder{
    color: #F2A9A9
  }
  ::-moz-placeholder{
    color: #F2A9A9
  }
  :-moz-placeholder{
    color: #F2A9A9
  }
  :-ms-input-placeholder{
    color: #F2A9A9
  }
  :focus{
    outline: #F2A9A9
  }
`
export const SearchButton = styled(Link)`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 20px;
`
export const SearchLogo = styled(SearchLogoSVG)`
  stroke: transparent;
  stroke-width: 1px;
  transition: stroke 0.5s ease;
  :hover{
    stroke: #FFCFCF;
  }
`