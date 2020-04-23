import React from "./node_modules/react";
import InputBox from "./InputBox";

const Container = () => {
  const props = {
    onChange: () => {},
    onClick: () => {},
  };

  return <InputBox {...props} />;
};

export default Container;
