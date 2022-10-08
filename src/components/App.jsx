import user from '../json/user.json';
import data from '../json/data.json';
import {Profile} from 'components/Profile/Profile';
// import {Statistics} from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    {/* <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} /> */}
    </div>
  );
};
