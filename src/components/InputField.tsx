import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //type if setTodo
  handleAdd: (e: React.FormEvent) => void; // it returns nothing
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur(); //fix issue when hiting enter and still hovering
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
      ></input>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
