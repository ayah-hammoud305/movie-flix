import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Spinner = () => {
  return (
    <div className="spinner__container">
        <div className="spinner">
        <FontAwesomeIcon className='spinner__icon' icon={faSpinner} />
        </div>
    </div>
  )
}

export default Spinner