import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.scss'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">devfinder</div>
      <div className="header__switch">
        <button className="header__switch-toggle">
          {!document.body.classList.contains('dark-theme') ? (
            <>
              Dark
              <FontAwesomeIcon className="header__switch-toggle-icon" icon="moon" />
            </>
          ) : (
            <>
              Light
              <FontAwesomeIcon className="header__switch-toggle-icon" icon="sun" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
