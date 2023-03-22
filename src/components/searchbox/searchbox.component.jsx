import { SearchBoxFormContainer, SearchBox, SearchButton, ParentSearchBoxContainer, SearchLogo } from "./searchbox.styles"
const Search = () => {
  return (
    <ParentSearchBoxContainer>
      <SearchBoxFormContainer>
        <SearchBox type='search' placeholder="Search a craving"></SearchBox>
        <SearchButton type='button'>
          <SearchLogo/>
        </SearchButton>
      </SearchBoxFormContainer>
    </ParentSearchBoxContainer>
  )
}

export default Search;