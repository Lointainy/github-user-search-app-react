import { useContext } from 'react'
import { CustomContext } from './hooks/Context'

/* Components */
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Card } from './components/Card'

import './App.scss'

export const App = () => {
  const { user } = useContext(CustomContext)
  return (
    <div className="app">
      <Header />
      <Search />
      {user != '' ? <Card user={user} /> : ''}
    </div>
  )
}
