function ListGroup() {
  const items = ["apple", "orange", "banana", "grape", "mango"];
  // for each item in items, create a list item

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item">{item}</li>
      ))}
    </ul>
  );
}

export default ListGroup;
