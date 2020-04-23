import React from "./node_modules/react";

export interface Props {
    selectedStatus: 'ALL' | 'Active' | 'Completed'
}

const VisibilityFilter: React.FC<Props> = ({selectedStatus = "ALL"}) => {
  return (
    <div>
        Show:
        <button disabled={selectedStatus === 'ALL'}>ALL</button>
        <button disabled={selectedStatus === 'Active'}>Active</button>
        <button disabled={selectedStatus === 'Completed'}>Completed</button>
    </div>
  );
};

export default VisibilityFilter;
