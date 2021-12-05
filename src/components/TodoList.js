import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const TodoList = () => {
  const { todos, removeTodo } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {todos.length > 0 ? (
        <>
          {todos.map(todo => (
            <ListGroupItem className="d-flex" key={todo.id}>
              <strong>{todo.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${todo.id}`} color="warning" className="btn btn-warning mr-1">Edit Todo</Link>
                <Button onClick={() => removeTodo(todo.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Todos</h4>
        )}
    </ListGroup>
  )
}
