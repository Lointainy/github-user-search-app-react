import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.scss'

export const Header = () => {
  const [userTheme, setUserTheme] = useState(localStorage.getItem('user-theme') || 'light-theme')

  const toggleTheme = () => {
    userTheme === 'dark-theme' ? setUserTheme('light-theme') : setUserTheme('dark-theme')
  }

  useEffect(() => {
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
