import { useState } from 'react'

/* Components */
import { Card, Header, Preloader, Search } from './components'

/* Style */
import './App.scss'

export const App: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState<any>([])

  const handleChangeSearch = (value: string): void => {
    setSearch(value)
  }

  const handleClickSearch = (): void => {
    if (search.length > 0) {
      getDataUser()
    }
  }

  const API: string = 'https://api.github.com/users/'

  const getDataUser = async () => {
    await fetch(`${API}${search}`)
      .then((res) => {
        setLoading(true)
        return res.json()
      })
      .then((data) => {
        setUserData(data)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }
  return (
    <div className="app">
      <Header />
      <Search search={search} handleChangeSearch={handleChangeSearch} handleClickSearch={handleClickSearch} />

      {userData != '' && userData.login != undefined ? loading ? <Preloader /> : <Card user={userData} /> : ''}
      {userData != '' && userData.login == undefined ? <div className="error-field">User is not avaible</div> : ''}
    </div>
  )
}
