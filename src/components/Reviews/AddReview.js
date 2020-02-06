import React, { useState } from 'react'
import BeautyStars from 'beauty-stars';

import styled from 'styled-components'

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`

const Form = styled.form`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`

const FormWrappers = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin: 1% auto;
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-top: 15%;

    &:hover{
      background-color: #45a049;
    }
`
const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding-bottom: 2%;
`

const ComeBackButton = styled.div`

`

export const AddReview = () => {
  const [wouldComeBack, setWouldComeBack] = useState(true)

  const handleSubmit = e => {
    e.preventDefault();
  }
  return(
    <Wrapper>
      <Form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <Rating>Food Rating:<BeautyStars value={0} size={15} /></Rating>
      <Rating>Price Rating:<BeautyStars value={0} size={15} /></Rating>
      <Rating>Service Rating:<BeautyStars value={0} size={15} /></Rating>
      Would you come back?
      <ComeBackButton onClick={()=> {setWouldComeBack(!wouldComeBack)}}>
        {wouldComeBack === true ? <p>Yes!</p> :
        wouldComeBack === false ? <p>No!</p> :
        null}
      </ComeBackButton>

      <Input 
      type="text"
      name="review"
      />
      <Button>Add Review</Button>
      </Form>
    </Wrapper>
)}