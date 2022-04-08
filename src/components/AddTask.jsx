import React, {useState} from 'react'
import {Form,Button} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import {addTask} from "../JS/actions/taskActions"

const AddTask = () => {
    const dispatch = useDispatch();
    const [text,setText]= useState("")

    //func 
    const handleChange = (e)=>{
        e.preventDefault()
        if(text){
            dispatch(addTask({id:Math.random(),text:text,isDone:false}))
            setText('')
        }else{
            alert("can't add empty task")
        }
    }
  return (
    <div>
        <Form style={{display:"flex" ,margin:"10px 200px"}} onSubmit={handleChange}>
  <Form.Group className="mb-3" >
    <Form.Control type="text" placeholder="Enter text" value={text} onChange={(e)=>setText(e.target.value)}  style={{width:"700px"}}/>
  </Form.Group>
  <Button variant="primary" type="submit"  >
    Submit
  </Button>
</Form>
    </div>
  )
}

export default AddTask