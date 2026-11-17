import { useCallback, useMemo, useState } from "react";
import Transaction from "./Transaction";

function AccountHandler() {
  let [balance, setBalance] = useState(1000);
  let [transaction, setTransactions] = useState([
    {
      id: 1,
      description: "Salary Credited",
      type: "credit",
      amount: 45000,
    },
    {
      id: 2,
      description: "Amazon Shopping",
      type: "debit",
      amount: 2500,
    },
    {
      id: 3,
      description: "Freelance Payment",
      type: "credit",
      amount: 12000,
    },
    {
      id: 4,
      description: "Electricity Bill",
      type: "debit",
      amount: 1800,
    },
    {
      id: 5,
      description: "Restaurant Payment",
      type: "debit",
      amount: 700,
    },
  ]);

  // useMemo
  let totalExpense = useMemo(() => {
    let t = transaction.reduce((p, c) => {
      if (c.type === "debit") {
        return p + c.amount;
      } else {
        return p;
      }
    }, 0);

    return t;
  }, [transaction]);

  let addAmount = () => {
    setBalance(balance + 100);
  };

  let sendAmount = useCallback(() => {
    // logic
  }, []);

  let sendATransactionReport = useCallback(() => {
    // send data to backend ( report )
  }, [transaction]);

  return (
    <div>
      <button onClick={addAmount}>Add Amount</button>
      <h3>Balance is: {balance}</h3>
      <h3>Total Expense : {totalExpense}</h3>
      <Transaction
        sendAmount={sendAmount}
        sendATransactionReport={sendATransactionReport}
      />
    </div>
  );
}

export default AccountHandler;
