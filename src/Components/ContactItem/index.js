import {BiStar} from 'react-icons/bi'
import './index.css'

const ContactItem = props => {
  const {contactDetails, toggleIsFavorite} = props
  const {name, mobileNo, isFavorite, id} = contactDetails

  const favClassName = isFavorite ? 'marked' : null

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }
  

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
        >
          <BiStar className={`favorite-icon ${favClassName}`} />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
