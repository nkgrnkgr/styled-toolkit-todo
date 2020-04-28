import React, { ChangeEventHandler } from "react";

interface Props {
  text: string;
  onChange: ChangeEventHandler;
}

const OrgUserInputBox: React.FC<Props> = ({ text, onChange }) => (
  <div>
    <label>Org:User</label>
    <input type="text" value={text} onChange={onChange} />
  </div>
);

export default OrgUserInputBox;
