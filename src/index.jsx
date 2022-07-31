import React from 'react'
import ReactDOM from 'react-dom/client'
import { Context } from './hooks/Context'

/* Components */
import { App } from './App'

/* Icons library */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun, faSearch, faLocationDot, faLink, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faMoon, faSun, faSearch, faLocationDot, faLink, faBuilding)

/* Style */
import '@/assets/scss/main.scss'
import '@fontsource/space-mono' //font

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
)
