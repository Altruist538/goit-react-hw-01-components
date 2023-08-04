import userItems from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile userItems={userItems} />
      <Statistics data={data} />
      <FriendListItem friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </>
  );
};
