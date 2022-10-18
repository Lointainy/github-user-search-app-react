import React from 'react'
import ReactDOM from 'react-dom/client'

/* Components */
import { App } from './App'

/* Icons library */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faLink, faLocationDot, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faGithub, faMoon, faSun, faSearch, faLocationDot, faLink, faBuilding)

/* Style */
import '@/assets/scss/main.scss'
import '@fontsource/space-mono' //font

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
