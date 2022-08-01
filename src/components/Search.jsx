import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useContext } from 'react'
import { CustomContext } from '../hooks/Context'

import './Search.scss'

export const Search = () => {
  const { search, handleSearch, handleClick } = useContext(CustomContext)
  return (
    <div className="search">
      <label className="search-field" htmlFor="search-input">
        <FontAwesomeIcon className="search-field__icon" icon="search" />
        <input
          value={search}
          onKeyPress={(event) => (event.key === 'Enter' ? handleClick() : '')}
          onChange={(event) => handleSearch(event)}
          className="search-field__input"
          type="search"
          name="search"
          id="search-input"
          placeholder="Search GitHub username…"
        />
        <button onClick={(event) => handleClick()} className="search-field__btn">
          search
        </button>
      </label>
    </div>
  )
}
