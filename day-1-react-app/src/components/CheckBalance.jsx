import BalanceDetails from "./BalanceDetails";

function CheckBalance() {
  return (
    <>
      <form action="#">
        <div>
          <label htmlFor="">Enter Number</label>
          <input type="text" placeholder="Enter Account Number" />
        </div>
        <div>
          <button>Verify</button>
        </div>
      </form>
      <hr />
      <BalanceDetails />
    </>
  );
}
export default CheckBalance;
