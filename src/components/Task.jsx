import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { deleteTask } from '../JS/actions/taskActions';
import Edit from './Edit'

const Task = ({task}) => {
    const dispatch = useDispatch()
  return (
    <div className='task'>
        <span style={{marginRight:"500px"}} > {task.text} </span>
        <Edit  task={task} />
        <Button style={{marginLeft:"20px"}} onClick={()=>dispatch(deleteTask(task.id))} variant="danger">Delete</Button>
    </div>
  )
}

export default Task