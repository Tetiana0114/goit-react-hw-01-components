// import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
    return <li className={css.item}>
    <span className={css.status}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
    <p className={css.name}>{name}</p>
  </li>
  };
    
// FriendListItem.propTypes = {
//   friends: PropTypes.array(PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//   }))
// };