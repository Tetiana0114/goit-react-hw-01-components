// import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return <section className="statistics">
    <h2 className="title">{title && 'Upload stats'}</h2>
  
    <ul className="stat-list">
      <li className="item">
        <span className="label">{stats}</span>
        <span className="percentage">{stats}</span>
      </li>
      <li className="item">
        <span className="label">{stats}</span>
        <span className="percentage">{stats}</span>
      </li>
      <li className="item">
        <span className="label">{stats}</span>
        <span className="percentage">{stats}</span>
      </li>
      <li className="item">
        <span className="label">{stats}</span>
        <span className="percentage">{stats}</span>
      </li>
    </ul>
  </section>
};

// Statistics.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
// }; 