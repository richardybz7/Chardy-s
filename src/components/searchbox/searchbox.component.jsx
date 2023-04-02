import { useDispatch } from "react-redux"
import { SearchBoxFormContainer, SearchBox, SearchButton, ParentSearchBoxContainer, SearchLogo } from "./searchbox.styles"
import { setSearchItems } from "../../store/basket/basket.action"
const Search = ({placeholder, items, location}) => {
  const dispatch = useDispatch()
  const searchOnChangeHandler = (e) => {
    switch(location){
      case 'checkout':
        const searchValue = e.target.value
        const searchItems = items.filter((item) => 
          item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        )
        dispatch(setSearchItems(searchItems))
    }
  }
  return (
    <ParentSearchBoxContainer>
      <SearchBoxFormContainer>
        <SearchBox type='search' placeholder={placeholder} onChange={(e) => searchOnChangeHandler(e)}></SearchBox>
        <SearchButton type='button'>
          <SearchLogo/>
        </SearchButton>
      </SearchBoxFormContainer>
    </ParentSearchBoxContainer>
  )
}

export default Search;