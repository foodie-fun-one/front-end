import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faUsers, faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logout from '../Authentication/Logout'
import './Navigation.css';

const Wrapper = styled.div`
  width: 100%;
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
  const [reloadPage, setReloadPage] = useState(true)
  let button;

  if (localStorage.getItem('token')) {
    button = <Button onClick={() => { Logout(); setReloadPage(!reloadPage) }}><FontAwesomeIcon icon={faSignOutAlt} color="black" /><P>Log out!</P></Button>
  } else {
    button = <Button><FontAwesomeIcon icon={faSignInAlt} color="black" /><P>Log in!</P></Button>
  }

  return (
    <Wrapper>
      <Link to="/explore"><FontAwesomeIcon size="4x" color="black" icon={faHamburger} /></Link>

      <ButtonDiv>

        <Link to="/explore">
          <Button>
            <FontAwesomeIcon icon={faUsers} color="black" />
            <P>Dashboard</P>
          </Button>
        </Link>

        <Link to="/login">
          {button}
        </Link>

        <Link to="/signup">
          <Button>
            <FontAwesomeIcon icon={faUserPlus} color="black" />
            <P>Sign Up</P>
          </Button>
        </Link>

      </ButtonDiv>
    </Wrapper>
  )
}