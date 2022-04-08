import React, {useState} from 'react';
import { Modal,Button,Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../JS/actions/taskActions';

const Edit = ({task}) => {
    const dispatch =useDispatch();
    const [show, setShow] = useState(false);
    const [newText,setNewText] = useState(task.text);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = ()=>{
        dispatch(editTask(task.id,newText))
        handleClose()
    }
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
        Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
    <Form.Group className="mb-3" >
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Edit task" value={newText} onChange={(e)=>setNewText(e.target.value)}  />
    </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Edit