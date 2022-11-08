import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <li class="item" key={friend.id}>
        {friend.isOnline ? (
          <span class="statusOn">on</span>
        ) : (
          <span class="statusOff">off</span>
        )}

        <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
        <p class="name">{friend.name}</p>
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
