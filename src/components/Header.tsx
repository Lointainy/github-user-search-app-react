import { useEffect, useState } from 'react'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Style */
import './Header.scss'

const Header: React.FC = () => {
  const [userTheme, setUserTheme] = useState<string>(localStorage.getItem('user-theme') || 'light-theme')

  const toggleTheme = (): void => {
    userTheme === 'dark-theme' ? setUserTheme('light-theme') : setUserTheme('dark-theme')
  }

  useEffect((): void => {
    localStorage.setItem('user-theme', userTheme)
    document.documentElement.className = userTheme
  }, [userTheme])

  return (
    <div className="header">
      <div className="header__logo">devfinder</div>
      <div className="header__switch">
        <button onClick={() => toggleTheme()} className="header__switch-toggle">
          {userTheme !== 'dark-theme' ? (
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

export default Header
