import React from "react";

const FilterButton = ({ active, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={active}
            style={{
                marginLeft: "4px"
            }}
        >
            {children}
        </button>
    );
};

export default FilterButton;
