import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const listTasks = useSelector((state)=>state.task.listTasks);
    console.log(listTasks)
  return (
    <div>
      {listTasks.map((el)=><Task task={el} key={el.id} />)}
    </div>
  )
}

export default ListTask