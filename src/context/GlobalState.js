import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  todos: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeTodo = (id) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: id
    })
  }

  const addTodo = (todo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  }

  const editTodo = (todo) => {
    dispatch({
      type: 'EDIT_TODO',
      payload: todo
    })
  }

  return (
    <GlobalContext.Provider value={{
      todos: state.todos,
      removeTodo,
      addTodo,
      editTodo
    }}>
      {children}
    </GlobalContext.Provider>
  )
}