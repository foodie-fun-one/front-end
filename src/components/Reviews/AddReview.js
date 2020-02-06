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
display: flex;
flex-direction: column;
border-radius: 10px;
background: rgba(233, 109, 88, 0.9);
box-shadow: 4px 8px 3px #BB8378;
color: #FFF6F4;
font-size: 1.2rem;
margin: 5% 0;
padding: 5% 0;
`

const H1 = styled.h1`
text-align: center;
`

const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 25%;
  margin: 2% auto;
  height: 15vh;
`

const Button = styled.button`
border-radius: 5px;
padding: 0.5rem 7.5%;
margin: 1rem auto;
background: #EDE9D0;
color: #e34129;
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
const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding-bottom: 2%;
`

const ComeBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ComeBackButton = styled.div`
border-radius: 5px;
padding: 0.5rem 1rem;
margin: 1rem auto;
background: #EDE9D0;
border: 2px solid #EDE9D0;
font-size: 1.1rem;
font-weight:500;
box-shadow: 3px 2px #56423E;
white-space: nowrap;
`

const Yes = styled.p`
  color: green;
  padding: 0%;
  margin: 0%;
`
const No = styled.p`
color: red;
padding: 0%;
margin: 0%;
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

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post(`/api/reviews/restaurant/${restrauntID}`, ({
      user_id: parseInt(localStorage.getItem('ID')),
      restaurant_id: restrauntID,
      review_disc: review_disc,
      price_rating: starRatings.price_rating,
      service_rating: starRatings.service_rating,
      food_rating: starRatings.food_rating,
      eat_again: eat_again
    }))
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

    axiosWithAuth().get(`/api/reviews/restaurant/${restrauntID}`)
      .then(res => { console.log(res) })
      .catch(err => console.log(err))
  }
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
      <H1 style={{ fontFamily: "Mogra"}}>Edit Restaurant</H1>
        <Rating>Food Rating:<BeautyStars
          onChange={value => setStarRatings({ ...starRatings, food_rating: value })}
          value={starRatings.food_rating}
          size={15} />
        </Rating>

        <Rating>Price Rating:<BeautyStars
          onChange={value => setStarRatings({ ...starRatings, price_rating: value })}
          value={starRatings.price_rating}
          size={15} />
        </Rating>

        <Rating>Service Rating:<BeautyStars
          onChange={value => setStarRatings({ ...starRatings, service_rating: value })}
          value={starRatings.service_rating}
          size={15} />
        </Rating>

        <TextArea
          name="review"
          rows="10"
          placeholder="Add a review!"
          value={review_disc}
          onChange={(e) => set_Review_Disc(e.target.value)}
        />

        <ComeBack>
          Would you come back?
      <ComeBackButton onClick={() => { setEat_Again(!eat_again) }}>
            {eat_again === true ? <Yes>Yes!</Yes> :
              eat_again === false ? <No>No!</No> :
                null}
          </ComeBackButton>
        </ComeBack>

        <Button>Add Review</Button>
      </Form>
    </Wrapper>
  )
}