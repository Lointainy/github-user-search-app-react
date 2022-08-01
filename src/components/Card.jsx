//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//style
import './Card.scss'

export const Card = ({ user }) => {
  const userJoinedDate =
    'Joined' +
    ' ' +
    new Date(user.date).getDate() +
    ' ' +
    new Date(user.date).toDateString().split(' ')[1] +
    ' ' +
    new Date(user.date).getFullYear()

  return (
    <div className="card">
      <div className="card__field">
        <div className="card__img">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="card__header">
          <div className="card__header-title">
            <div className="card__header-title-name">{user.name ? user.name : 'Not avaible'}</div>
            <a href={user.userUrl} className="card__header-title-link">
              @{user.login}
            </a>
          </div>
          <div className="card__header-data">{userJoinedDate}</div>
        </div>
        <div className="card__desc">{user.desc}</div>
        <div className="card__info">
          <ul className="card__info-list">
            {user.info.map((item, index) => {
              return (
                <li className="card__info-list-item" key={index}>
                  <div className="item-title">{item.title}</div>
                  <div className="item-number">{item.number}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="card__links">
          <ul className="card__links-list">
            {user.links.map((item, index) => {
              return (
                <li className="card__links-list-item" disabled={item.url ? false : true} key={index}>
                  <FontAwesomeIcon icon={item.iconName} className="item-icon" />
                  <div className="item-title">{item.url ? item.url : 'Not avaible'}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
