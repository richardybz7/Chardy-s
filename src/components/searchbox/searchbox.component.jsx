import { SearchBoxFormContainer, SearchBox, SearchButton, ParentSearchBoxContainer, SearchLogo } from "./searchbox.styles"
import { useEffect, useRef } from "react";
const Search = () => {
  const renderCounter = useRef(1)
  useEffect(() => {
    renderCounter.current++
  })
  return (
    <ParentSearchBoxContainer>
      <SearchBoxFormContainer>
        <SearchBox type='search' placeholder={renderCounter.current}></SearchBox>
        <SearchButton type='button'>
          <SearchLogo/>
        </SearchButton>
      </SearchBoxFormContainer>
    </ParentSearchBoxContainer>
  )
}

export default Search;