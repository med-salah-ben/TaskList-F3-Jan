import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../constant/actionTypes"


export const addTask = (newTask) => {
    return{
        type:ADD_TASK,
        payload:newTask
    }
}

export const editTask = (id,newTask) => {
    return{
        type:EDIT_TASK,
        payload : {id,newTask}
    }
}

export const deleteTask = (id)=>{
    return{
        type:DELETE_TASK,
        payload:{id}
    }
}