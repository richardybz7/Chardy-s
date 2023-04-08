import { useDispatch } from "react-redux"
import { SearchBoxFormContainer, SearchBox, SearchButton, ParentSearchBoxContainer, SearchLogo } from "./searchbox.styles"
import { setSearchItems } from "../../store/basket/basket.action"
const Search = ({placeholder, items, location}) => {
  const dispatch = useDispatch()
  const searchOnChangeHandler = (e) => {
    const searchValue = e.target.value
    switch(location){
      case 'checkout':
        const searchItems = items.filter((item) => 
          item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        )
        dispatch(setSearchItems(searchItems))
      case 'myPurchases':
        const searchPurchaseItems = items.filter((item) => 
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