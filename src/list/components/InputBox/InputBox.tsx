import React, { ChangeEventHandler } from "react";

interface Props {
  onChange: ChangeEventHandler;
  onClick: () => void;
}

const InputBox: React.FC<Props> = ({ onChange, onClick }) => {
  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={onClick}>add</button>
    </div>
  );
};

export default InputBox;
