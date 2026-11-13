function Input(props) {
  let { user, inputChange, pressHandler } = props;
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={user}
        onChange={inputChange}
        onKeyUp={pressHandler}
      />
    </>
  );
}

export default Input;
