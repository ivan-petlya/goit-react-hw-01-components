import css from './FriendsList.module.css';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <li className={css.friendList__item} key={friend.id}>
        {friend.isOnline ? (
          <span className={css.isOnline}></span>
        ) : (
          <span className={css.isOffline}></span>
        )}

        <img src={friend.avatar} alt={friend.name} width="48" />
        <p className={css.friendList__name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
