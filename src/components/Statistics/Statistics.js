import { Wrapper, Topic, List, ListLi, Text } from './Statistics.styled';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      {title && <Topic>{title}</Topic>}
      <List className="stat-list">
        {stats.map(dat => (
          <ListLi style={{ backgroundColor: getRandomHexColor() }} key={dat.id}>
            <span className="label">{dat.label}</span>
            <Text className="percentage">{dat.percentage}%</Text>
          </ListLi>
        ))}
      </List>
    </Wrapper>
  );
};
