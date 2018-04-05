import {Button, Form, FormControl, FormGroup, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import './css/Navigation.css';
import {LinkContainer} from "react-router-bootstrap";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    constructor(){
        super();

        this.state = {
            newTodoText: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        if(this.state.newTodoText.length !== 0) {
            this.props.onTodoAdd(this.state.newTodoText);
            this.setState({
                newTodoText: ""
            });
        }

        e.preventDefault();
    }

    onChange(e){
        this.setState({
            newTodoText: e.target.value
        });
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Link className='navbar-brand' to="/">
                        todos
                    </Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <FormControl type="text" value={this.state.newTodoText} placeholder="Add todo" onChange={this.onChange}/>
                            </FormGroup>{' '}
                            <Button disabled={this.state.newTodoText.length === 0}
                                    type="submit">Add</Button>
                        </Form>
                    </Navbar.Form>
                    {/*<Nav activeKey={this.props.location} pullRight>*/}
                        {/*<NavDropdown eventKey={'user-dropdown'} title={this.props.username} id="basic-nav-dropdown">*/}
                            {/*<MenuItem onClick={this.props.onLogout} eventKey={'/logout'}>Logout</MenuItem>*/}
                        {/*</NavDropdown>*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

Navigation.propTypes = {
    onTodoAdd: PropTypes.func.isRequired
    // location: PropTypes.string,
    // username: PropTypes.string
    // onLogout: PropTypes.func.isRequired
};