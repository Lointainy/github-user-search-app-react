import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun, faSearch, faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faMoon, faSun, faSearch, faLocationDot, faLink)

/* Style */
import '@/assets/scss/main.scss'
import '@fontsource/space-mono' //font

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
