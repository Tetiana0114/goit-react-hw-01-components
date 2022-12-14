import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import {Profile} from 'components/Profile/Profile';
import {Statistics} from 'components/Statistics/Statistics';
import {FriendList} from 'components/Friends/FriendList';
import {TransactionHistory} from 'components/Transactions/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics 
      title="Upload stats"
      stats={data}
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
  );
};
