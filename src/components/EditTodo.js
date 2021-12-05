import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditTodo = (props) => {
  const { editTodo, todos } = useContext(GlobalContext);
  const [selectedTodo, setSelectedTodo] = useState({
    id: '',
    title: '',
    color:'',
    text: '',
  })
  const history = useHistory();
  const currentTodoId = props.match.params.id;

  useEffect(() => {
    const todoId = currentTodoId;
    const selectedTodo = todos.find(todo => todo.id === todoId);
    setSelectedTodo(selectedTodo);
  }, [currentTodoId, todos])

  const onChange = (e) => {
    setSelectedTodo({ ...selectedTodo, 
      [e.target.title]: e.target.value,
      [e.target.color]: e.target.value,
      [e.target.text]: e.target.value
     })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editTodo(selectedTodo);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" value={selectedTodo.title} onChange={onChange} name="title" placeholder="Enter title" required></Input>
        <Label>Color</Label>
        <Input type="color" value={selectedTodo.color} onChange={onChange} name="color" placeholder="Choose Color" required></Input>
        <Label>Text</Label>
        <Input type="textarea" value={selectedTodo.text} onChange={onChange} name="text" placeholder="Enter Text" required></Input>
      </FormGroup>
      <Button type="submit">Edit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
