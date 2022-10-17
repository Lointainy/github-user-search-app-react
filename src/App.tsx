import { useContext } from 'react'
import { CustomContext } from './hooks/Context'

/* Components */
import { Card, Header, Preloader, Search } from './components'

import './App.scss'

export const App = () => {
  const { user, loading } = useContext(CustomContext)
  return (
    <div className="app">
      <Header />
      <Search />
      {user != '' && user.login != undefined ? loading ? <Preloader /> : <Card user={user} /> : ''}
      {user != '' && user.login == undefined ? <div className="error-field">User is not avaible</div> : ''}
    </div>
  )
}
