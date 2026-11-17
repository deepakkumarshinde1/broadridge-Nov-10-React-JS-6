import HomePage from "./components/HomePage";
import TransactionDetails from "./components/TransactionDetails";
import Transactions from "./components/Transactions";
import UserAccountProfile from "./components/UserAccountProfile";
import Users from "./components/Users";
import AboutUs from "./components/AboutUs";
import Headers from "./components/Headers";
import { Navigate, Route, Routes } from "react-router-dom";
import UserTransactionHistory from "./components/UserTransactionHistory";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <>
      <main className="container-fluid">
        <Headers />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user" element={<UserTransactionHistory />}>
            <Route path="profile/:id" element={<UserAccountProfile />} />
            <Route
              path="transaction-history/:id"
              element={<TransactionHistory />}
            />
          </Route>
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transaction-details" element={<TransactionDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
