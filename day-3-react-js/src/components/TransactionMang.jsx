import { useEffect, useState } from "react";

function TransactionMang() {
  let [amount, setAmount] = useState("");
  let [type, setType] = useState("");
  let [desc, setDesc] = useState("");
  let [transaction, setTransaction] = useState([]);

  let inputChangeAmount = (event) => {
    let _amount = event.target.value;
    setAmount(_amount);
  };

  let inputChangeType = (event) => {
    let _type = event.target.value;
    setType(_type);
  };

  let inputChangeDesc = (event) => {
    let _desc = event.target.value;
    setDesc(_desc);
  };

  let saveTransaction = (event) => {
    event.preventDefault();
    let newTransaction = {
      amount,
      type,
      desc,
    };

    let _transaction = [...transaction, newTransaction];
    setTransaction(_transaction);
    clearForm();
  };

  let clearForm = () => {
    setAmount("");
    setType("");
    setDesc("");
  };

  useEffect(() => {
    console.log(transaction);
  }, [transaction]);

  return (
    <>
      <section className="col-12">
        <h2 className="text-center text-primary m-4">Transaction Management</h2>
      </section>
      <section className="col-4">
        <form
          className="shadow p-3 mb-5 bg-body-tertiary rounded border"
          onSubmit={saveTransaction}
        >
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Enter Amount"
              onChange={inputChangeAmount}
              value={amount}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Transaction Type
            </label>
            <select
              className="form-select"
              aria-label="Default select"
              onChange={inputChangeType}
              value={type}
            >
              <option value="">--- Select ---</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Enter Description"
              onChange={inputChangeDesc}
              value={desc}
            />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-success me-3">
              Save
            </button>
            <button
              onClick={clearForm}
              type="button"
              className="btn btn-danger"
            >
              Clear
            </button>
          </div>
        </form>
      </section>
      <section className="col-8">
        <div className="border rounded-3 overflow-auto">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{value.desc}</td>
                    <td>
                      {value.type === "Credit" ? (
                        <span className="badge text-bg-success">
                          {value.type}
                        </span>
                      ) : (
                        <span className="badge text-bg-danger">
                          {value.type}
                        </span>
                      )}
                    </td>
                    <td>₹{value.amount}/-</td>
                    <td>
                      <button type="button" className="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

// JSX => class => className
// close all element <hr> => <hr/> , <input /> , <img/>
// find (cmd/control + f) className= replace it with className=

export default TransactionMang;
