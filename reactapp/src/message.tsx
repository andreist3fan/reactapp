function Message() {
  // this apparently is converted to javascript by babel (JSX).
  const name = "Jill";
  return (
    <div>
      <h1>hello, {name}!</h1>

      <input type="text" />
    </div>
  );
}

export default Message;
