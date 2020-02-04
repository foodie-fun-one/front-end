import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Restaurants } from './Restaurants'

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`

const AddButton = styled.button`
  padding: 1% 4%;
`
export const Dashboard = () => {
  
  return(
    <Wrapper>
      <h1>Welcome to FoodieFun!</h1>
      <Link to="/add-restaurant"><AddButton>Add Restaurant</AddButton></Link>

      <Restaurants />
    </Wrapper>
)}