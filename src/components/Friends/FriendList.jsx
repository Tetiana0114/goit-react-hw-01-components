import PropTypes from 'prop-types';
import css from './FriendList.module.css'

import {FriendListItem} from 'components/Friends/FriendListItem';

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
         {friends.map(friend => (
         <FriendListItem key={friend.id} friends={friend}/>
         ))}
</ul>
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
      }))
};