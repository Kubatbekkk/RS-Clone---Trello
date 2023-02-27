/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyledTodoList } from './styles';
import type { ITask } from '../../types/boardsAndTasks';
import List from './List';

const TodoList = ({ tasks, boardId }: { tasks: ITask[]; boardId: string }) => {
  const [todos, setTodos] = useState<ITask[]>([]);
  const [doing, setDoing] = useState<ITask[]>([]);
  const [done, setDone] = useState<ITask[]>([]);

  const mapAllTasks = () => {
    tasks.forEach((task) => {
      if (task.status === 'todo') {
        setTodos((prev) => [...prev, task]);
      }
      if (task.status === 'doing') {
        setDoing((prev) => [...prev, task]);
      }
      if (task.status === 'done') {
        setDone((prev) => [...prev, task]);
      }
    });
  };

  useEffect(() => {
    setTodos([]);
    setDoing([]);
    setDone([]);
    mapAllTasks();
  }, [tasks]);

  return (
    <StyledTodoList className='animeLeft'>
      {todos.length > 0 && (
        <List type="todo" tasks={todos} boardId={boardId} />
      )}
      {doing.length > 0 && (
        <List type="doing" tasks={doing} boardId={boardId} />
      )}
      {done.length > 0 && <List type="done" tasks={done} boardId={boardId} />}
    </StyledTodoList>
  );
};

export default TodoList;
