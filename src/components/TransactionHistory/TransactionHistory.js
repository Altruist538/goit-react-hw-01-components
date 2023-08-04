import {
  Wrapper,
  Topic,
  List,
  ListLi,
  Text,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
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
        {transactions.map((transaction, index) => (
          <Text
            style={{
              backgroundColor: index % 2 !== 0 ? '#9e9e9e' : '#ffffff',
            }}
            key={transaction.id}
          >
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </Text>
        ))}
      </tbody>
    </Wrapper>
  );
};
