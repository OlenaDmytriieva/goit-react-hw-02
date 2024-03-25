import style from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.headCell}>Type</th>
          <th className={style.headCell}>Amount</th>
          <th className={style.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => {
          return (
            <tr key={transaction.id} className={style.tr}>
              <td className={style.cell}>{transaction.type}</td>
              <td className={style.cell}>{transaction.amount}</td>
              <td className={style.cell}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
