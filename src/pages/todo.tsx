import { useState } from "react";
import Trash from "../components/trash";
type ListStyleType = {
  id: number;
  label: string;
  done: boolean;
};
const initialList: ListStyleType[] = [
  {
    id: 0,
    label: "mmm",
    done: true,
  },
  {
    id: 1,
    label: "mmm",
    done: false,
  },
];
const Todo = () => {
  const [listItems, setListItems] = useState<ListStyleType[]>(initialList);

  return (
    <div className="container">
      <h1>To do list</h1>
      <div className="todo">
        <div className="todo__header">
          <input className="todo__input"></input>
          <button className="todo__button">Submit</button>
        </div>
        <div className="todo__item__wrapper">
          {listItems.map((listItem: ListStyleType) => {
            return (
              <div className="todo__item" key={listItem.id}>
                <div className="todo__item__label">{listItem.label}</div>
                <div className="todo__item__remove">
                  <Trash />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
