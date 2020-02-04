import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`
const Form = styled.form`

`

const Input = styled.input`

`

export const EditReview = () => {
  const[review, setReview] = useState({
    foodRating: 0,
    priceRating: 0,
    serviceRating: 0,
    overallRating: 0,
    review: ""
  })

  const handleChange = e => {

  }
  
  return(
    <Wrapper>
      <Form>
        <Input 
        type="text"
        name="review"
        onChange={handleChange}
        value={review.review}
        />
      </Form>
    </Wrapper>
)}