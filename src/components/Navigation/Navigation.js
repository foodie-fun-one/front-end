import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faUsers, faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logout from '../Authentication/Logout'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 10vh;
  background: #FFF6F4;
  opacity: 90%;
  box-shadow: 0 3px 3px #56423e;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

const H1 = styled.h1`
  color: black;
  font-size: 3rem;
  padding-left: 5%;
  padding-top: 5%;

  &:focus {outline-color: white;}
`
const HeadLink = styled(Link)`
  display: flex;
  align-items: center;

  &:hover{text-decoration: none;}
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
      <HeadLink to="/explore"><FontAwesomeIcon size="4x" color="black" icon={faHamburger} /><H1 style={{ fontFamily: "Mogra" }}>FoodieFun</H1></HeadLink>

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