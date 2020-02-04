import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faUsers, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonDiv = styled.div`
  display: flex;
`

const Button = styled.button`
  width: 100px;
  padding-top: 5%;
  border: 0px;
  color: black;

  &:hover{
    text-decoration: underline;
  }
`

const P = styled.p`
  color: black;
`

export const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return(
    <Wrapper>
      <Link to = "/login"><FontAwesomeIcon size="4x" color="black" icon={faHamburger}/></Link>

      <ButtonDiv>

      <Button>
      <Link to="/explore">
      <FontAwesomeIcon icon={faUsers} color="black"/>
      <P>Dashboard</P>
      </Link>
      </Button>

      <Button onClick={() =>{setLoggedIn(!loggedIn)}}>
      <Link to="/login">
      <FontAwesomeIcon icon={faSignInAlt} color="black"/>
      {loggedIn === true ? <P>Log Out</P> :
       loggedIn === false ? <P>Log in</P> :
       null}
       </Link>
      </Button>

      <Button>
        <Link to="/signup">
        <FontAwesomeIcon icon={faUserPlus} color="black"/>
        <P>Sign Up</P>
        </Link>
      </Button>

      </ButtonDiv>
    </Wrapper>
)}