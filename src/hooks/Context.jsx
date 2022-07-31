import { useState, createContext, useEffect } from 'react'

export const CustomContext = createContext()

export const Context = (props) => {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState('')
  const [onSearch, setOnSearch] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleClick = () => {
    setOnSearch(true)
  }

  const API = 'https://api.github.com/users/'
  const TOKEN = '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'

  const getDataUser = () => {
    if (search.length > 0) {
      fetch(`${API}${search}`, {
        method: 'GET',
        headers: { Authorization: `token ${TOKEN}` },
      })
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
    setOnSearch(false)
  }, [onSearch])

  const value = {
    user,
    search,
    handleSearch,
    handleClick,
    onSearch,
  }

  return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>
}
