import React, { ChangeEventHandler } from "react";

interface Props {
  text: string;
  onChange: ChangeEventHandler;
  onClick: () => void;
}

const InputBox: React.FC<Props> = ({ text, onChange, onClick }) => {
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onClick}>Add Todo</button>
    </div>
  );
};

export default InputBox;
