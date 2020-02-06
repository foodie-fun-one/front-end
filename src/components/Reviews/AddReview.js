import React, { useState, useContext } from 'react'
import BeautyStars from 'beauty-stars';

import styled from 'styled-components'
import { axiosWithAuth } from '../../Utils/AuthAxios';

import { RestrauntContext } from '../../contexts/RestrauntContext'

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
  const { restrauntID } = useContext(RestrauntContext);
  const [eat_again, setEat_Again] = useState(true)

  const [starRatings, setStarRatings] = useState({
    price_rating: "",
    service_rating: "",
    food_rating: "",
  })

  const [review_disc, set_Review_Disc] = useState("")

  let testObj = {}

  axiosWithAuth().get(`/api/reviews/restaurant/${restrauntID}`)
  .then(res => {console.log(res)})
  .catch(err => console.log(err))

  const handleSubmit = e => {
    e.preventDefault();
    testObj = {
      restaurant_id: restrauntID,
      review_disc: review_disc,
      price_rating: starRatings.price_rating,
      service_rating: starRatings.service_rating,
      food_rating: starRatings.food_rating,
      eat_again: eat_again
    }
    console.log(testObj)
    function getCurrentUser(req, res) {
      console.log(req.req_id)
       }
      console.log(getCurrentUser)
  }
  return(
    <Wrapper>
      <Form onSubmit={handleSubmit}>

      <Rating>Food Rating:<BeautyStars 
      onChange={value => setStarRatings({...starRatings, food_rating: value})} 
      value={starRatings.food_rating} 
      activeColor={"#DA291C"} 
      size={15} />
      </Rating>

      <Rating>Price Rating:<BeautyStars 
      onChange={value => setStarRatings({...starRatings, price_rating: value})} 
      value={starRatings.price_rating} 
      activeColor={"#DA291C"} 
      size={15} />
      </Rating>

      <Rating>Service Rating:<BeautyStars 
      onChange={value => setStarRatings({...starRatings, service_rating: value})} 
      value={starRatings.service_rating} 
      activeColor={"#DA291C"} 
      size={15} />
      </Rating>

      Would you come back?
      <ComeBackButton onClick={()=> {setEat_Again(!eat_again)}}>
        {eat_again === true ? <p>Yes!</p> :
        eat_again === false ? <p>No!</p> :
        null}
      </ComeBackButton>

      <Input 
      type="text"
      name="review"
      value={review_disc}
      onChange={(e)=> set_Review_Disc(e.target.value)}
      />
      <Button>Add Review</Button>
      </Form>
    </Wrapper>
)}