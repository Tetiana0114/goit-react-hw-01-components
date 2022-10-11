// import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return <table className={css.transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map(item => (
        <tbody key={item.id}>
      <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </tbody>
    ))}
  </table>
  };
