import React from "react";

interface Props {

}

const VisibilityFilter: React.FC<Props> = () => {
  return (
    <div>
        Show:
        <button>ALL</button>
        <button>Active</button>
        <button>Completed</button>
    </div>
  );
};

export default VisibilityFilter;
