import { Wrapper, Topic, List, ListLi, Text } from './Statistics.styled';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const Statistics = ({ data }) => {
  return (
    <Wrapper>
      <Topic className="title">Upload stats</Topic>

      <List className="stat-list">
        {data.map(dat => (
          <ListLi style={{ backgroundColor: getRandomHexColor() }} key={dat.id}>
            <span className="label">{dat.label}</span>
            <Text className="percentage">{dat.percentage}%</Text>
          </ListLi>
        ))}
      </List>
    </Wrapper>
  );
};
