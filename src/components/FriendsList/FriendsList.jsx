import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFriends } from '../../redux/friends/selectors.js';
import { getFriends } from '../../redux/friends/operations.js';
import FriendsItem from '../FriendsItem/FriendsItem.jsx';
import s from './FriendsList.module.scss';

const FriendsList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {Array.isArray(friends) &&
        friends.map(item => (
          <li key={item._id}>
            <FriendsItem item={item} />
          </li>
        ))}
    </ul>
  );
};

export default FriendsList;
