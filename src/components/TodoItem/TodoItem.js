import React from "react";
export default function TodoItem(props) {
  const { item, deleteItem } = props;
  let length = item.length;
  const list = length ? (
    item.map((item) => {
      return (
        <div>
          <div key = {item.id}>
            <span className="name"> {item.name} </span>
            <span className="age"> {item.age} </span>
            <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
          </div>
        </div>
      );
    })
  ) : (
    <p>this no item to show</p>
  );
  return (
    <div className="listItem">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
      </div>
      {list}
    </div>
  );
}
