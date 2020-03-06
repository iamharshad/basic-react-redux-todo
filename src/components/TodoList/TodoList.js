import React from "react";
import { connect } from "react-redux";

import { VisibilityFilters } from "../../store/Constants";
import { toggleTodo } from "../../store/Actions";

import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                />
            ))}
        </ul>
    );
};

const visiableTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknonw filter:" + filter);
    }
};

const mapStateToProps = state => {
    return {
        todos: visiableTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
