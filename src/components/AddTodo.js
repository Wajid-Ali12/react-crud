import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [text, setText] = useState('');
  const { addTodo } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id:uuid(),
      title,
      color,
      text
    }
    console.log(newTodo);
    addTodo(newTodo);
    history.push("/");
  }


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="name" placeholder="Enter Title" required></Input>
        <Label>color</Label>
        <Input type="color" value={color} onChange={(e)=>setColor(e.target.value)} name="color" placeholder="Enter Color" required></Input>
        <Label>Text</Label>
        <Input type="textarea" value={text} onChange={(e)=>setText(e.target.value)} name="color" placeholder="Description" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
