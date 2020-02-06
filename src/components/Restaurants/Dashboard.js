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
  padding: 0.5rem 0;
  margin: 1rem auto;
  color: #e34129;
  background: #EDE9D0;
  border: 2px solid #EDE9D0;
  font-size: 1.1rem;
  font-weight:500;
  box-shadow: 3px 2px #56423E;
  white-space: nowrap;

  &:hover{
      background: #56423E;
      box-shadow: 2px 1px #56423E;
      border: 2px solid #56423E;
      color: #EDE9D0;
`
export const Dashboard = () => {
  
  return(
    <Wrapper>
      <h1 style={{ fontFamily: "Mogra"}}>Welcome to FoodieFun!</h1>
      <StyledLink to="/add-restaurant"><AddButton>Add Restaurant</AddButton></StyledLink>
      <Restaurants />
    </Wrapper>
)}