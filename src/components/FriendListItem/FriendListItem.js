import { Wrapper, Text, PointSpan, ImgAvatar } from './FriendList.styled.js';
export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Wrapper className="item">
      <PointSpan
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        className="status"
      ></PointSpan>
      <ImgAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Text className="name">{name}</Text>
    </Wrapper>
  );
};
