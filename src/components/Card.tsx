/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Style */
import './Card.scss'

/* Types */
interface props {
  user: any
}

const Card: React.FC<props> = ({ user }) => {
  const userJoinedDate =
    'Joined' +
    ' ' +
    new Date(user.created_at).getDate() +
    ' ' +
    new Date(user.created_at).toDateString().split(' ')[1] +
    ' ' +
    new Date(user.created_at).getFullYear()

  return (
    <div className="card">
      <div className="card__field">
        <div className="card__img">
          <img src={user.avatar_url} alt={user.name} />
        </div>
        <div className="card__header">
          <div className="card__header-title">
            <div className="card__header-title-name">{user.name ? user.name : 'Not avaible'}</div>
            <a href={user.html_url} className="card__header-title-link">
              @{user.login}
            </a>
          </div>
          <div className="card__header-data">{userJoinedDate}</div>
        </div>
        <div className="card__desc">{user.bio}</div>
        <div className="card__info">
          <ul className="card__info-list">
            <li className="card__info-list-item">
              <div className="item-title">Repos</div>
              <div className="item-number">{user.public_repos}</div>
            </li>
            <li className="card__info-list-item">
              <div className="item-title">Followers</div>
              <div className="item-number">{user.followers}</div>
            </li>
            <li className="card__info-list-item">
              <div className="item-title">Following</div>
              <div className="item-number">{user.following}</div>
            </li>
          </ul>
        </div>
        <div className="card__links">
          <ul className="card__links-list">
            <li className={user.location ? 'card__links-list-item' : 'card__links-list-item disabled'}>
              <FontAwesomeIcon icon="location-dot" className="item-icon" />
              <div className="item-title">{user.location ? user.location : 'Not avaible'}</div>
            </li>
            <li className={user.twitter_username ? 'card__links-list-item' : 'card__links-list-item disabled'}>
              <FontAwesomeIcon icon="fa-brands fa-twitter" className="item-icon" />
              <div className="item-title">{user.twitter_username ? user.twitter_username : 'Not avaible'}</div>
            </li>
            <li className={user.blog ? 'card__links-list-item' : 'card__links-list-item disabled'}>
              <FontAwesomeIcon icon="link" className="item-icon" />
              <div className="item-title">{user.blog ? user.blog : 'Not avaible'}</div>
            </li>
            <li className={user.company ? 'card__links-list-item' : 'card__links-list-item disabled'}>
              <FontAwesomeIcon icon="building" className="item-icon" />
              <div className="item-title">{user.company ? user.company : 'Not avaible'}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
