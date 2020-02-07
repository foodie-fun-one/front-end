import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Restaurants } from './Restaurants'


const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
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
  border-radius: 5px;
  margin: 1rem auto;
  color: white;
  background: #FF423BFF;
  border: 2px solid #FF423BFF;
  font-size: 1.1rem;
  font-weight:500;
  box-shadow: 3px 2px #FF423BFF;
  white-space: nowrap;

  &:hover{
      background: #FF241BFF;
      box-shadow: 2px 1px #FF241BFF;
      border: 2px solid #FF241BFF;
      color: #EDE9D0;
`
export const Dashboard = () => {

  return (
    <Wrapper>
      <h1 style={{ fontFamily: "Mogra" }}>Welcome to FoodieFun!</h1>
      <StyledLink to="/add-restaurant"><AddButton>Add Restaurant</AddButton></StyledLink>
      <Restaurants />
    </Wrapper>
  )
}