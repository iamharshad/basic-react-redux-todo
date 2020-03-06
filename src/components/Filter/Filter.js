import React from "react";

import { connect } from "react-redux";

import FilterButton from "./FilterButton";

import { VisibilityFilters } from "../../store/Constants";
import { setVisibilityFilter } from "../../store/Actions";

const Filter = ({ active, onClick }) => {
    return (
        <div>
            <FilterButton
                active={active === VisibilityFilters.SHOW_ALL}
                onClick={() => {
                    onClick(VisibilityFilters.SHOW_ALL);
                }}
            >
                All
            </FilterButton>
            <FilterButton
                active={active === VisibilityFilters.SHOW_ACTIVE}
                onClick={() => {
                    onClick(VisibilityFilters.SHOW_ACTIVE);
                }}
            >
                Active
            </FilterButton>
            <FilterButton
                active={active === VisibilityFilters.SHOW_COMPLETED}
                onClick={() => {
                    onClick(VisibilityFilters.SHOW_COMPLETED);
                }}
            >
                completed
            </FilterButton>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        active: state.visibilityFilter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: filter => {
            dispatch(setVisibilityFilter(filter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
