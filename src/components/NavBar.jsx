import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar,NavbarBrand,NavItem,NavLink,Nav,NavbarToggler,Collapse} from 'reactstrap'

export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={
            isopen:false
        }
    }
    handletoggle = ()=>{
        this.setState({...this.state,isopen:!this.state.isopen})
    }
  render() {
    return (
        <Navbar
        color="light"
        expand="md"
        light
      >
        <Link to="/" style={{textDecoration:"none"}}>
        <NavbarBrand>
          Todolist
        </NavbarBrand>
        </Link>

        <NavbarToggler onClick={this.handletoggle} />
        <Collapse navbar isOpen={this.state.isopen}>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
            <Link to="/" style={{textDecoration:"none"}}>
              <NavLink>
                Home
              </NavLink>
            </Link>
            </NavItem>
            {/* <NavItem>
                <Link to="about" style={{textDecoration:"none"}}>
                <NavLink >
                Manage
              </NavLink>
                </Link>

            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
