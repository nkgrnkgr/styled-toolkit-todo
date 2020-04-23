import React, { ChangeEventHandler } from "./node_modules/react";

interface Props {
  onChange: ChangeEventHandler;
  onClick: () => void;
}

const InputBox: React.FC<Props> = ({ onChange, onClick }) => {
  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={onClick}>Add Todo</button>
    </div>
  );
};

export default InputBox;