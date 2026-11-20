import Counter from "./components/Counter";
import InputBox from "./components/InputBox";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button>Login</button>

      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter username" />
        </div>
      </form>
      <Counter start={0} />
      <InputBox />
    </div>
  );
}

export default App;
