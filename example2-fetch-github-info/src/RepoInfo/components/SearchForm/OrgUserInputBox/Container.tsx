import React from "react";
import OrgUserInputBox from "./OrgUserInputBox";

const Container = () => {
  const props = {
    text: "",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
  };

  return <OrgUserInputBox {...props} />;
};

export default Container;
