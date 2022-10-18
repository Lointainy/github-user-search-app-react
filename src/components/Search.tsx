/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Style */
import './Search.scss'

/* Types */
interface props {
  search: string
  handleChangeSearch: (e: string) => void
  handleClickSearch: () => void
}

const Search: React.FC<props> = ({ search, handleChangeSearch, handleClickSearch }) => {
  return (
    <div className="search">
      <label className="search-field" htmlFor="search-input">
        <FontAwesomeIcon className="search-field__icon" icon="search" />
        <input
          value={search}
          onKeyDown={(e) => {
            e.code === 'Enter' ? handleClickSearch() : ''
          }}
          onChange={(e) => handleChangeSearch(e.target.value)}
          className="search-field__input"
          type="search"
          name="search"
          id="search-input"
          placeholder="Search GitHub username…"
        />
        <button className="search-field__btn" onClick={handleClickSearch}>
          search
        </button>
      </label>
    </div>
  )
}

export default Search
