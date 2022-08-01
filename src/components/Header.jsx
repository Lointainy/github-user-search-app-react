import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.scss'

export const Header = () => {
  const [userTheme, setUserTheme] = useState('light-theme')

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem('user-theme')
    activeTheme === 'light-theme' ? setUserTheme('dark-theme') : setUserTheme('light-theme')
    userTheme === 'light-theme' ? uploadTheme('dark-theme') : uploadTheme('light-theme')
  }

  const uploadTheme = (theme) => {
    localStorage.setItem('user-theme', theme)
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
