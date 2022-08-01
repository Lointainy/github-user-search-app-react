import { useContext } from 'react'
import { CustomContext } from './hooks/Context'

/* Components */
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Card } from './components/Card'
import { Preloader } from './components/Preloader'

import './App.scss'

export const App = () => {
  const { user, loading } = useContext(CustomContext)
  return (
    <div className="app">
      <Header />
      <Search />
      {user != '' && user.login != undefined ? loading ? <Preloader /> : <Card user={user} /> : ''}
    </div>
  )
}
