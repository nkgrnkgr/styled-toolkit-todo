import React  from "./node_modules/react";
import VisibilityFilter, { Props} from "./VisibilityFilter";

const Container = () => {
  const props: Props = {
      selectedStatus: "ALL"
  };

  return <VisibilityFilter {...props} />;
};

export default Container;
