import styled from "styled-components";
import { ReactComponent as SearchLogoSVG } from '../../assets/search-lg1.svg'

export const ParentSearchBoxContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`
export const SearchBoxFormContainer = styled.form`
  border: 4px solid transparent;
  background-color: #F2F2F2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  transition: border 0.3s ease;
  :hover{
    border: 4px solid var(--color1);
  }
`
export const SearchBox = styled.input`
  font-family: var(--font-family);
  border: none;
  background-color: transparent;
  width: 100%;
  ::-webkit-input-placeholder{
    color: var(--color1)
  }
  ::-moz-placeholder{
    color: var(--color1)
  }
  :-moz-placeholder{
    color: var(--color1)
  }
  :-ms-input-placeholder{
    color: var(--color1)
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
  border-radius: 0.5em;
  box-shadow: 0 0 0 5px var(--background-color);
  overflow: auto;
  background-color: var(--background-color);
  border: 5px solid var(--color1);
  margin-top: 0.5em;
  margin-right: 1.5rem;
  ::-webkit-scrollbar{
    width: 10px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 0.5em;
    background-color: #ECECEC;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--color3);
    border-radius: 0.1em;
  }
`
export const CantFindContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1em 0;
  font-size: 0.8em;
`