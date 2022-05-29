import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import PropTypes from "prop-types";
import AddTodoModal from '../modal/AddTodoModal'

const mapStateToProps = (state)=>({
    ...state
})

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            isopen:false
        }
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    togglemodal = ()=>{
        this.setState((prevstate)=>({...prevstate,isopen:!prevstate.isopen}))
    }
    render() {
        const todos = this.props.todos.todos || []
        return (
            <Container>
                <AddTodoModal isopen={this.state.isopen} togglemodal={this.togglemodal}/>
                <h1>Add todo</h1>
                <hr />
                <Row className='gy-3' >
                    <Col xs="6" > 
                    <div className=" d-flex justify-content-center align-items-center item-box pointer-cursor" 
                    onClick={()=>this.togglemodal()} > + </div> </Col>
                    {todos.map(item=><Col xs="6" key={item.id}  >
                    <div className=' d-flex justify-content-center align-items-center item-box pointer-cursor' onClick={()=>this.props.history.push("/todo/"+item.id)} > 
                    {/* <Link to={"/todo/"+item.id} style={{color:"black",textDecoration:"none"}}>  */}
                    <p> {item.task.length>15 ? item.task.slice(0,13)+"..." : item.task  } </p>
                    {/* </Link>  */}
                    </div> </Col>)}
                </Row>
            </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Home))