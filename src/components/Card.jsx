import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Card.scss'

export const Card = () => {
  return (
    <div className="card">
      <div className="card__field">
        <div className="card__img">
          <img src="" alt="" />
        </div>
        <div className="card__header">
          <div className="card__header-title">
            <div className="card__header-title-name">The Octocat</div>
            <div className="card__header-title-link">@octocat</div>
          </div>
          <div className="card__header-data">Joined 25 Jan 2011</div>
        </div>
        <div className="card__desc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </div>
        <div className="card__info">
          <ul className="card__info-list">
            <li className="card__info-list-item">
              <div className="item-title">Repos</div>
              <div className="item-number">8</div>
            </li>
            <li className="card__info-list-item">
              <div className="item-title">Followers</div>
              <div className="item-number">3938</div>
            </li>
            <li className="card__info-list-item">
              <div className="item-title">Following</div>
              <div className="item-number">9</div>
            </li>
          </ul>
        </div>
        <div className="card__links">
          <ul className="card__links-list">
            <li className="card__links-list-item">
              <FontAwesomeIcon icon="location-dot" className="item-icon" />
              <div className="item-title">San Francisco</div>
            </li>
            <li className="card__links-list-item">
              <FontAwesomeIcon icon={['fab', 'twitter']} className="item-icon" />
              <div className="item-title">prince lointain</div>
            </li>
            <li className="card__links-list-item">
              <FontAwesomeIcon icon="link" className="item-icon" />
              <div className="item-title">https://github.blog</div>
            </li>

            <li className="card__links-list-item">
              <FontAwesomeIcon icon="building" className="item-icon" />
              <div className="item-title">@github</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
