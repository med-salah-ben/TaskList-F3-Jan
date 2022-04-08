import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../constant/actionTypes";


const initialState = {
    listTasks:[{id:1,text:"hello world!!!",isDone:false}]
}

const taskReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_TASK:
            return {...state , listTasks: [...state.listTasks,payload]}
        case EDIT_TASK : 
        return {...state , listTasks : state.listTasks.map((el)=>
            el.id ===payload.id ? {...el,text:payload.newTask} : el)}
        case DELETE_TASK:
            return {...state,listTasks:state.listTasks.filter((el)=>el.id !== payload.id)}
    
        default:
            return state
    }
}


export default taskReducer