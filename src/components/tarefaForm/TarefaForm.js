import React, { useState, useEffect, useRef } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { Form, Input, Button } from './tarefaForm-style';

function TarefaForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (any) => {
    setInput(any.target.value);
  };

  const handleSubmit = (any) => {
    any.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000000000),
      text: input,
    });

    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Input
            type="text"
            placeholder="Atualizar tarefa"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <Button>
            <MdEdit size={20} color={'white'} />
          </Button>
        </>
      ) : (
        <>
          <Input
            type="text"
            placeholder="Tarefa..."
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <Button>
            <BsPlusLg size={20} color={'white'} />
          </Button>
        </>
      )}
    </Form>
  );
}

export default TarefaForm;
