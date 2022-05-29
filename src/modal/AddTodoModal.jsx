import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import {addtodos} from '../redux/todoStore'

class AddTodoModal extends Component {
  constructor(props){
    super(props)
    this.state={
      task:"",
      description:""
    }
  }

  formhandler = (type,val)=>{
    this.setState((prev)=>({...prev,[type]:val}))
  }

  addtodos = ()=>{
    this.props.addtodos({task:this.state.task,description:this.state.description})
    this.setState({      task:"",
    description:""})
    this.props.togglemodal()
  }


  render() {
    const taskvalidator = this.state.task !== ""
    const descriptionvalidator = this.state.description.length>20
    return (
        <Modal
        toggle={this.props.togglemodal}
        isOpen={this.props.isopen}
      >
        <ModalHeader toggle={this.props.togglemodal}>
          Add
        </ModalHeader>
        <ModalBody>
         <Form onSubmit={e=>e.preventDefault()}>
           <FormGroup className='position-relative'>
             <Label>Task</Label>
             <Input valid={taskvalidator} invalid={!taskvalidator} value={this.state.task} onChange={(e)=>this.formhandler("task",e.target.value)} />
             <FormFeedback >
               Task title is required.
             </FormFeedback>
           </FormGroup>
           <FormGroup  >
             <Label>Description</Label>
             <Input valid={descriptionvalidator}  invalid={!descriptionvalidator} type='textarea' row={6} value={this.state.description} onChange={(e)=>this.formhandler("description",e.target.value)} />
             <FormFeedback >
               Description must be greater than 20 characters.
             </FormFeedback>
           </FormGroup>
         </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={this.addtodos}
            disabled={!taskvalidator || !descriptionvalidator}
          >
            Add
          </Button>
          {' '}
          <Button onClick={this.props.togglemodal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}


export default connect((state)=>({...state}),{addtodos})(AddTodoModal)