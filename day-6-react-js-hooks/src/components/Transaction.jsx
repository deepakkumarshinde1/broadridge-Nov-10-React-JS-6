import { memo } from "react";

function Transaction(props) {
  console.log("Transaction component");
  return (
    <div>
      THis is transaction list
      <button onClick={props.sendAmount}>Send Amount</button>
      <button onClick={props.sendATransactionReport}>Send Report</button>
    </div>
  );
}

export default memo(Transaction);

// memorization (caching)
// comp => hoc => higher order components => "memo" => function accepts Comp adn function parameter
// variable
// function
