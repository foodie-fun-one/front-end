import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';

import BeautyStars from 'beauty-stars';

import { RestrauntContext } from '../../contexts/RestrauntContext'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
`

const CardWrapper = styled.div`
  width: 100%;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 2% 0;
  padding: 1%;
  background-color: #e96c59;
  box-shadow: 4px 8px 3px #BB8378;
  border-radius: 10px 10px 10px 10px;
`

const InfoWrapper = styled.div`
  width: 25%
  display: flex;
  flex-direction: column;
`

const RatingsWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const OptionsWrapper = styled.div`
  min-height: 200px;
`

const Rating = styled.div`

`

const ReviewText = styled.p`

`

const Title = styled.div`
  font-size: 2rem;
`

const Hours = styled.div`
  font-size: 1.5rem;
  font-style: italic;
`

const Address = styled.div`
  font-size: 1.25rem;
`

const Review = styled.div`
  vertical-align:top;
  display:inline-block;
  width: 30%;
`

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  padding: 25%;
  margin: 2% 10%;
  color: white;
  background: #FF423BFF;
  border: 2px solid #FF423BFF;
  font-size: 1.1rem;
  font-weight:500;
  box-shadow: 3px 2px #FF423BFF;
  &:hover{
    text-decoration: underline;
  }
`

const DotWrapper = styled.p`
  font-size: 1.5rem;
  color: white;

  &:focus{font-weight: bold;}
`

const No = styled.p`
  text-align: center;

  &: after{ 
    content: " ❌"
  }
`
const Yes = styled.p`
  text-align: center;

  &:after {
    content: " ✅"
  }
`
export const Restaurant = (props) => {
  const { name, address, hours, id } = props.restaurants
  const { findID, findReviewID, reviews, fetchedReviewID } = useContext(RestrauntContext)

  
  const [review, setReview] = useState({
    food_rating: 0,
    price_rating: 0,
    service_rating: 0,
    review_disc: "Click on the add gray button to add a review to this restaurant",
    eat_again: false
  })
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  
  const [isReview, setIsReview] = useState(false)
  let button;

  if (isReview) {
    button = <Link to = "/edit-review" onClick = {()=> {findReviewID(review.restaurant_id) }}> <Button>Edit Review</Button></Link >
  } else {
    button = <Link to="/add-review" onClick={() => {findID(id)}}><Button>Add Review</Button></Link>
  }
  
  useEffect(() => {
    if (reviews) {
      reviews.forEach((el) => {
        if (el.restaurant_id === id) {
          setReview(el)
          setIsReview(true)
        }
      })
    }
  }, [reviews, id])

  return (
    <Wrapper>
      <CardWrapper>
        <InfoWrapper>
          <Title>{name}</Title>
          <Hours>Hours: {hours}</Hours>
          <Address>{address}</Address>
        </InfoWrapper>

        <RatingsWrapper>
          <Rating>Food Rating:<BeautyStars value={review.food_rating} edit={false} size={15} /></Rating>
          <Rating>Price Rating:<BeautyStars value={review.price_rating} edit={false} size={15} /></Rating>
          <Rating>Service Rating:<BeautyStars value={review.service_rating} edit={false} size={15} /></Rating>
          {review.eat_again === false ? <No>Would Not eat there again</No> : review.eat_again === true ? <Yes>Would eat there again!</Yes> : null}
        </RatingsWrapper>

        <Review><ReviewText>{review.review_disc}</ReviewText></Review>


        <OptionsWrapper>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle id="optionsButton" tag="button">
              <DotWrapper>...</DotWrapper>
            </DropdownToggle>
            <DropdownMenu>
              <Link to="/edit-restaurant" onClick={() => { findID(id) }}><DropdownItem>Edit Restaurant</DropdownItem></Link>
              <DropdownItem 
              onClick={() => {
                findReviewID(review.restaurant_id) 
                if(fetchedReviewID){props.DeleteRestaurant(id)}
                }}>Delete Restaurant
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </OptionsWrapper>
      </CardWrapper>
      {button}
    </Wrapper>
  )
}