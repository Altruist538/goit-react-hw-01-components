import {
  Wrapper,
  Text,
  Topic,
  List,
  ListLi,
  ImgAvatar,
} from './Profile.styled';
export const Profile = ({
  userItems: { username, tag, location, avatar, stats },
}) => {
  return (
    <Wrapper>
      <div className="description">
        <ImgAvatar src={avatar} alt="User avatar" />
        <Topic className="name">
          <b>{username}</b>
        </Topic>
        <Text className="tag">{tag}@pmarica</Text>
        <Text className="location">{location}</Text>
      </div>

      <List>
        <ListLi>
          <span className="label">Followers</span>
          <span className="quantity">
            <b>{stats.followers}</b>
          </span>
        </ListLi>
        <ListLi>
          <span className="label">Views</span>
          <span className="quantity">
            <b>{stats.views}</b>
          </span>
        </ListLi>
        <ListLi>
          <span className="label">Likes</span>
          <span className="quantity">
            <b>{stats.likes}</b>
          </span>
        </ListLi>
      </List>
    </Wrapper>
  );
};
