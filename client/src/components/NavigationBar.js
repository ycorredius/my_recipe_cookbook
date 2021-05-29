import React from 'react';
import {Link,useHistory} from 'react-router-dom'
import {END_POINT} from "../actions/recipe/endpoint";
import {Navbar,Nav,Button,Collapse} from 'bootstrap-4-react'
import axios from 'axios'

const NavigationBar = (props) => {

    const history = useHistory();

    const handleLogout = () => {
      axios.delete(`${END_POINT}/logout`)
        .then(history.push('/login'))
    }

    if(!props.logged_in && !props.userId){
        return(<React.Fragment>
                <Navbar expand="lg"  dark bg="dark" mb="3">
                <Navbar.Brand href="/">My Recipe Cookbook</Navbar.Brand>
                <Navbar.Toggler target="#navbarColor1" />
                <Collapse navbar id="navbarColor1">
                    <Navbar.Nav mr="auto">
                        <Link to="/recipes">
                            <Nav.Link> Recipes</Nav.Link>
                        </Link>
                        <Link to="/sign_up">
                            <Nav.Link>Sign Up</Nav.Link>
                        </Link>
                        <Link to="/login">
                           <Nav.Link>Login</Nav.Link>
                        </Link>
                    </Navbar.Nav>
                </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }else{
        return (
          <React.Fragment>
            <Navbar expand="lg" dark bg="dark" mb="3">
              <Navbar.Brand href="/recipes">My Recipe Cookbook</Navbar.Brand>
              <Navbar.Toggler target="#navbarColor1" />
              <Collapse navbar id="navbarColor1">
                <Navbar.Nav mr="auto">
                  <Link to="/recipes">
                    <Nav.Link>Recipe</Nav.Link>
                  </Link>
                  <Link to="/new_recipe">
                    <Nav.Link>Create New Recipe</Nav.Link>
                  </Link>
                  <Link to={`/users/${props.userId}/recipes`}>
                    <Nav.Link>My Recipes</Nav.Link>
                  </Link>
                </Navbar.Nav>
                <Button onClick={handleLogout}>Logout</Button>
              </Collapse>
            </Navbar>
          </React.Fragment>
        );
        
    }
    
}

export default NavigationBar;