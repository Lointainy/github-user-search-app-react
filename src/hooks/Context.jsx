import { useState, createContext, useEffect } from 'react'

export const CustomContext = createContext()

export const Context = (props) => {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleClick = () => {
    setLoading(true)
  }

  const API = 'https://api.github.com/users/'

  const getDataUser = () => {
    if (search.length > 0) {
      fetch(`${API}${search}`)
        .then((res) => res.json())
        .then((data) =>
          setUser({
            name: data.name,
            login: data.login,
            avatar: data.avatar_url,
            userUrl: data.html_url,
            date: data.created_at,
            desc: data.bio,
            info: [
              {
                title: 'Repos',
                number: data.public_repos,
              },
              {
                title: 'Followers',
                number: data.followers,
              },
              {
                title: 'Following',
                number: data.following,
              },
            ],
            links: [
              {
                title: 'Location',
                url: data.location,
                iconName: 'location-dot',
              },
              {
                title: 'Twitter',
                url: data.twitter_username,
                iconName: 'fa-brands fa-twitter',
              },
              {
                title: 'Blog',
                url: data.blog,
                iconName: 'link',
              },
              {
                title: 'Company',
                url: data.company,
                iconName: 'building',
              },
            ],
          })
        )
    } else setUser('')
  }

  useEffect(() => {
    getDataUser()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [loading])

  const value = {
    user,
    search,
    handleSearch,
    handleClick,
    loading,
  }

  return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>
}
