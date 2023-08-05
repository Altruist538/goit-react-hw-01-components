import { Wrapper, Text, PointSpan, ImgAvatar } from './FriendList.styled.js';
export const FriendListItem = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <Wrapper className="item" key={friend.id}>
          <PointSpan
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
            className="status"
          ></PointSpan>
          <ImgAvatar
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <Text className="name">{friend.name}</Text>
        </Wrapper>
      ))}
    </ul>
  );
};
