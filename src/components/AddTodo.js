import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../store/Actions";

const AddTodo = ({ onClick }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    onClick(input.value);
                    input.value = "";
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: text => dispatch(addTodo(text))
    };
};

export default connect(null, mapDispatchToProps)(AddTodo);
