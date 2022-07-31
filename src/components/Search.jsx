import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Search.scss'

export const Search = () => {
  return (
    <div className="search">
      <label className="search-field" htmlFor="search-input">
        <FontAwesomeIcon className="search-field__icon" icon="search" />
        <input
          className="search-field__input"
          type="search"
          name="search"
          id="search-input"
          placeholder="Search GitHub username…"
        />
        <button className="search-field__btn">search</button>
      </label>
    </div>
  )
}
