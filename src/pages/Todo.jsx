import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteTodoById } from '../redux/todoStore';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            todo: this.props.todos.todos.filter(item=>item.id+'' === this.props.match.params.id)[0] || null
        }
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    delete = ()=>{
        this.props.deleteTodoById({id:this.props.match.params.id})
        this.props.history.push("/")
    }
  render() {
    console.log(this.state.todo?.description)
    if(!this.state.todo){
        return<Container>
            <h1 style={{textAlign:"center"}}>404 | We couldn't find this todo.</h1>
        </Container>
    }
    return (
        <Container>
            <h1>Todo : {this.state.todo?.task} </h1>
            <hr/>
            <p style={{whiteSpace:"pre-line"}} >{this.state.todo?.description}</p>

            <button className='mt-5 btn btn-lg btn-danger' onClick={()=>this.delete()}>Delete</button>
        </Container>
    )
  }
}


const TodoWithrouter = withRouter( connect((state)=>({...state}),{deleteTodoById})(Todo) )

export default TodoWithrouter