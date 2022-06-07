import React, { useState } from 'react';
import TarefaForm from '../tarefaForm/TarefaForm';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import {
  Row,
  Content,
  Boxicons,
  EditButton,
  DeleteButton,
} from './tarefa-style';

function Tarefa({ tarefas, completeTarefa, removeTarefa, updateTarefa }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTarefa(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TarefaForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tarefas.map((tarefa, index) => (
    <Row $mode={tarefa.isComplete ? 'complete' : 'notComplete'} key={index}>
      <Content key={tarefa.id} onClick={() => completeTarefa(tarefa.id)}>
        {tarefa.text}
      </Content>
      <Boxicons>
        <EditButton>
          <MdEdit
            onClick={() => setEdit({ id: tarefa.id, value: tarefa.text })}
            size={25}
          />
        </EditButton>
        <DeleteButton>
          <IoMdCloseCircle onClick={() => removeTarefa(tarefa.id)} size={25} />
        </DeleteButton>
      </Boxicons>
    </Row>
  ));
}

export default Tarefa;
