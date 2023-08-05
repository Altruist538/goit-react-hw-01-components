import { Wrapper, Topic, Text } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper className="transaction-history">
      <thead>
        <Topic>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Topic>
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
    </Wrapper>
  );
};
