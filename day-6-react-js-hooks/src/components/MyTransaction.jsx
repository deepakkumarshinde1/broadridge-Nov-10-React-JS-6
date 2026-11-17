import React, {
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";

function MyTransaction() {
  let transactions = [
    { id: 1, title: "Amazon Shopping", amount: 2500 },
    { id: 2, title: "Electricity Bill", amount: 1800 },
    { id: 3, title: "Netflix Subscription", amount: 649 },
    { id: 4, title: "Amazon Refund", amount: 1200 },
    { id: 5, title: "Mobile Recharge", amount: 599 },
    { id: 6, title: "Amazon Prime", amount: 1499 },
    { id: 7, title: "Internet Bill", amount: 999 },
  ];
  let [inputBox, setInputBox] = useState("");
  let [transactionSearch, setTransactionSearch] = useState([...transactions]);
  let deferredSearch = useDeferredValue(inputBox);

  let handelChange = (event) => {
    let { value } = event.target;
    setInputBox(value);
  };

  useEffect(() => {
    let newSearchResult = transactions.filter((transaction) => {
      return transaction.title
        .toLowerCase()
        .includes(deferredSearch.toLowerCase());
    });
    setTransactionSearch(newSearchResult);
  }, [deferredSearch]);
  return (
    <div>
      <input
        type="text"
        value={inputBox}
        placeholder="Search"
        onChange={handelChange}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionSearch.map((t, index) => {
            return (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.title}</td>
                <td>{t.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyTransaction;
