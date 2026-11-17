import { useEffect } from "react";
import { useUserContext } from "../context/user.context";
import { useParams } from "react-router-dom";

function TransactionHistory() {
  let { getUserTransactionHistory, userTransactionHistory } = useUserContext();
  let { id } = useParams();
  useEffect(() => {
    getUserTransactionHistory(id);
  }, []);
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Sr. No.</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userTransactionHistory.map((transaction, index) => {
              return (
                <tr key={transaction.id}>
                  <td>{index + 1}</td>
                  <td>{transaction.reference}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>
                    {transaction.type === "debit" ? (
                      <span className="badge bg-danger">Debit</span>
                    ) : (
                      <span className="badge bg-success">Credit</span>
                    )}
                  </td>
                  <td className="text-success fw-semibold">
                    {transaction.type === "credit" && "+"} {transaction.amount}
                  </td>
                  <td>
                    {transaction.status === "failed" ? (
                      <span className="badge bg-danger text-capitalize">
                        {transaction.status}
                      </span>
                    ) : (
                      <span className="badge bg-success text-capitalize">
                        {transaction.status}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransactionHistory;
