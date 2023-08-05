import { WrapperTabl, TopicTabl, Text } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <WrapperTabl>
      <thead>
        <TopicTabl>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TopicTabl>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <Text
            style={{
              backgroundColor: index % 2 !== 0 ? '#9e9e9e' : '#ffffff',
            }}
            key={item.id}
          >
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </Text>
        ))}
      </tbody>
    </WrapperTabl>
  );
};
