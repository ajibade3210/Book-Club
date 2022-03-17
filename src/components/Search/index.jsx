import React from 'react'
import {Input, SearchContainer} from './styles'
import search from '../../assets/search.svg'

const Search = ({filterBooks}) => {
  const handleChange = (event) => {
    console.log(event.target.value)
    filterBooks(event.target.value)
  }

  return (
    <SearchContainer>
      <img src={search} alt="" />
      <Input type="text" name="search" autoComplete="off" onChange={handleChange} />
    </SearchContainer>
  )
}

export default Search
