import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.defaultValue,
    };
  }

  increment = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  resetCount = () => {
    this.setState({
      count: this.props.defaultValue,
    });
  };

  render() {
    return (
      <>
        <h1>The Count is {this.state.count}</h1>
        <button onClick={this.increment}>Inc Count</button>
        <button onClick={this.resetCount}>Reset</button>
      </>
    );
  }
}

export default Counter;

// Event Click , DblClick , mouse ,keyboard

// State in React
// Object to store Data => 1,"a",true,[1,2,3,2],{student:"deepak"}

// State => Change => vDOM => Updated the Real DOM

// in-build =>
// function comp => state => useState() => Hooks
// use (hooks) => complex function in react
// in-build hooks of react => useState
// create own hooks => custom hooks => useLogin
// 3rd party hooks => useParams , useNavigate , useLocation , useSearchParams
// in function comp
