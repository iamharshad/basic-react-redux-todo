import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";

function App() {
    return (
        <Provider store={store}>
            <AddTodo />
            <TodoList />
            <Filter />
        </Provider>
    );
}

export default App;
