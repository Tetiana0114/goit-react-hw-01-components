import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'
import { FaMobileAlt } from 'react-icons/fa';

export const FriendListItem = ({ avatar, name, isOnline } ) => {
  return <li className={css.item}>
  {isOnline === true ? (
      <span><FaMobileAlt size="24" className={css.status_on}/></span>
    ) : (
      <span><FaMobileAlt size="24" className={css.status_off}/></span>
    )}
  <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
  <p className={css.name}>{name}</p>
</li>
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};