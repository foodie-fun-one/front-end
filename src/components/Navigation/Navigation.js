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
  margin-top: 20%;
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

      <Link to="/explore">
      <Button>
      <FontAwesomeIcon icon={faUsers} color="black"/>
      <P>Dashboard</P>
      </Button>
      </Link>

      <Link to="/login">
      <Button onClick={() =>{setLoggedIn(!loggedIn)}}>
      <FontAwesomeIcon icon={faSignInAlt} color="black"/>
      {loggedIn === true ? <P>Log Out</P> :
       loggedIn === false ? <P>Log in</P> :
       null}
      </Button>
       </Link>

        <Link to="/signup">
      <Button>
        <FontAwesomeIcon icon={faUserPlus} color="black"/>
        <P>Sign Up</P>
      </Button>
        </Link>

      </ButtonDiv>
    </Wrapper>
)}