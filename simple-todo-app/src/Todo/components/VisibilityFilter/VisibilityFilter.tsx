import React from "react";
import { VisibilityFilterStatus } from "../../modules/visibilityFIlter";

export interface Props {
  selectedStatus: VisibilityFilterStatus;
  selectFilter: (selectedFilter: VisibilityFilterStatus) => void;
}

const VisibilityFilter: React.FC<Props> = ({
  selectedStatus,
  selectFilter,
}) => {
  return (
    <div>
      Show:
      <button
        onClick={() => selectFilter("ALL")}
        disabled={selectedStatus === "ALL"}
      >
        ALL
      </button>
      <button
        onClick={() => selectFilter("Active")}
        disabled={selectedStatus === "Active"}
      >
        Active
      </button>
      <button
        onClick={() => selectFilter("Completed")}
        disabled={selectedStatus === "Completed"}
      >
        Completed
      </button>
    </div>
  );
};

export default VisibilityFilter;
