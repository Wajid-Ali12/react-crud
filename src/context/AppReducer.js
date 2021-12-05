// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type)  {
    case 'REMOVE_TODO':
   return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload;
        })
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case 'EDIT_TODO':
      const updateTodo = action.payload;

      const updateTodos = state.todos.map(todo => {
        if (todo.id === updateTodo.id) {
          return updateTodo;
        }
        return todo;
      })
      return {
        ...state,
        todos: updateTodos
      }

    default:
      return state;
  }
}