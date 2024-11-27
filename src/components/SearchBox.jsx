import React from 'react'
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const SearchBox = ({ searchValue, setSearchValue, handleSubmit }) => {

    const handleSearchChange = (event) => {
        event.preventDefault();
        setSearchValue(event.target.value); 
    }
 

  return (
    <form onSubmit={handleSubmit} className='search__bar--container'>
                <input 
                placeholder='Search...' 
                type='text' 
                className='search__bar'
                value={searchValue}
                onChange={handleSearchChange}
                 />
                <button className='search__btn' type='submit'>
                    <FontAwesomeIcon className='search__icon' icon={faMagnifyingGlass} />
                    <FontAwesomeIcon className='search__icon--spinner' icon={faSpinner} />
                </button>
            </form>
  )
}

export default SearchBox;