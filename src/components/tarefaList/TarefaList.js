import React, { useState } from 'react';
import Tarefa from '../tarefa/Tarefa';
import TarefaForm from '../tarefaForm/TarefaForm';
import styled from 'styled-components';

const Box = styled.div`
  max-width: 600px;
  margin: 100px auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 10px 10px 5px #000000;
  border: 3px solid #000000;
`;

const TitleBox = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  background: black;
`;

const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-family: 'Dancing Script';
  font-weight: 700;
  font-size: 54px;
  line-height: 77px;
  color: white;
`;

function TarefaList() {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = (tarefa) => {
    if (!tarefa.text || /^\s*$/.test(tarefa.text)) {
      return;
    }
    const newTarefa = [tarefa, ...tarefas];
    setTarefas(newTarefa);
  };

  const removeTarefa = (id) => {
    const deleteTarefa = [...tarefas].filter((tarefa) => tarefa.id !== id);
    setTarefas(deleteTarefa);
  };

  const updateTarefa = (id, updateValue) => {
    if (!updateValue.text || /^\s*$/.test(updateValue.text)) {
      return;
    }
    setTarefas((tarefas) =>
      tarefas.map((item) => (item.id === id ? updateValue : item)),
    );
  };

  const completeTarefa = (id) => {
    let updateTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.isComplete = !tarefa.isComplete;
      }
      return tarefa;
    });
    setTarefas(updateTarefas);
  };

  return (
    <Box>
      <Card>
        <TitleBox>
          <Title>Tarefas</Title>
        </TitleBox>
        <TarefaForm onSubmit={addTarefa} />
        <Tarefa
          tarefas={tarefas}
          completeTarefa={completeTarefa}
          removeTarefa={removeTarefa}
          updateTarefa={updateTarefa}
        />
      </Card>
    </Box>
  );
}

export default TarefaList;
