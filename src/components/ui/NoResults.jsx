import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NoResults = ({ searchValue }) => {
  return (
    <div className="no__results">
        <figure className="no__results--icon-wrapper">
        <FontAwesomeIcon className='no__results--icon' icon={faTriangleExclamation} />
        </figure>
        <h1 className="no__results--text">
            No results found for {searchValue} :(
        </h1>
    </div>
  )
}

export default NoResults