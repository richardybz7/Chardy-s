import { useDispatch, useSelector } from "react-redux"
import { SearchBoxFormContainer, SearchBox, SearchButton, ParentSearchBoxContainer, SearchLogo, SearchResultContainer, CantFindContainer } from "./searchbox.styles"
import { setSearchItems } from "../../store/basket/basket.action"
import SearchBoxItems from "../searchbox-items/searchbox-items.component"
import { selectSearchItems } from "../../store/basket/basket.selector"
import { useRef } from "react"
const Search = ({placeholder, items, location}) => {
  const dispatch = useDispatch()
  const searchItems = useSelector(selectSearchItems)
  const searchRef = useRef({value: 0})
  let searchedItems = []
  const searchOnChangeHandler = (e) => {
    const searchValue = e.target.value
    searchRef.current.value = searchValue
    switch (location){
      case 'checkout':
        searchedItems = items.filter((item) => 
              item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            )
        dispatch(setSearchItems(searchedItems))
        break;
      case '/':
        let finalArray = []
        let itemsArray = Object.values(items).map((item) => item.reduce((acc,curr, i) => {
          acc[i] = curr
          return acc
        },{}))
        
        itemsArray.map((item, i) => {
          Object.values(item).map((item) => finalArray.push(item))
        })
        searchedItems = finalArray.filter((item) => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        dispatch(setSearchItems(searchedItems))
        break;
      default: break;
    }
  }
  return (
    <ParentSearchBoxContainer>
      <SearchBoxFormContainer onSubmit={(e) => e.preventDefault()}>
        <SearchButton>
          <SearchLogo/>
        </SearchButton>
        <SearchBox type='search' ref={searchRef} placeholder={placeholder} onChange={(e) => searchOnChangeHandler(e)}></SearchBox>
      </SearchBoxFormContainer>
      {
        location === '/' && searchRef.current.value.length > 0 && (searchItems.length > 0 ?
        <SearchResultContainer>
          {
            searchItems.map((item, i) => <SearchBoxItems key={i} item={item}/>)
          }
        </SearchResultContainer>
        :
        <SearchResultContainer>
          <CantFindContainer>
            Sorry, we cannot find what you're looking for
          </CantFindContainer>
        </SearchResultContainer>
        )
      }
    </ParentSearchBoxContainer>
  )
}

export default Search;