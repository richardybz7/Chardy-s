import styled from "styled-components";
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
  padding: 5px 10px 5px 10px;
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
export const SearchButton = styled.div`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 20px;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  padding-right: 5px;
  padding-left: 3px;
`
export const SearchLogo = styled(SearchLogoSVG)`
  stroke: transparent;
  stroke-width: 1px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`
export const SearchResultContainer = styled.div`
  position: fixed;
  width: 88%;
  max-width: 480px;
  max-height: 200px;
  border-radius: 0.3em;
  overflow: auto;
  background-color: var(--background-color);
  border: 1px solid gray;
  margin-top: 0.5em;
  margin-right: 1.5rem;
`