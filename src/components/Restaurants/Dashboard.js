import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Restaurants } from './Restaurants'

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  font-family: 'Varela Round', sans-serif;
`
const StyledLink = styled(Link)`
  border-bottom: 0px;

    &:hover{
      border-bottom: 0px;
    }
`
const AddButton = styled.button`
  padding: 1% 4%;
  margin-right: 2%;
`
export const Dashboard = () => {
  
  return(
    <Wrapper>
      <h1 style={{ fontFamily: "Mogra"}}>Welcome to FoodieFun!</h1>
      <StyledLink to="/add-restaurant"><AddButton>Add Restaurant</AddButton></StyledLink>
      <Restaurants />
    </Wrapper>
)}