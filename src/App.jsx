import { Header } from './components/Header'
import { Search } from './components/Search'
import { Card } from './components/Card'

import './App.scss'

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Search />
      <Card />
    </div>
  )
}
