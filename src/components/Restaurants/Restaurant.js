import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin: 2% 0;
  padding: 1%;
  background-color: #e96c59;
  box-shadow: 4px 8px 3px #BB8378;
  border-radius: 10px;
`

const InfoWrapper = styled.div`
  width: 25%
  display: flex;
  flex-direction: column;
`

const RatingsWrapper = styled.div`
  width: 20%;
  width: 25%;
`

const OptionsWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 2;

  &#optionsButton {
    background-color: purple;
  }
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding-bottom: 2%;
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
  height: ;
  width: 40%;
  border: 1px solid gray;
  margin: 0%;
  min-height: 200px;
`

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  padding: 25%;
  margin: 2% 10%;
  
  &:hover{
    text-decoration: underline;
  }
`

const DotWrapper = styled.div`
  font-size: 1.5rem;
`

export const Restaurant = (props) => {
  const { name, address, hours, id} = props.restaurants
  const {findID} = useContext(RestrauntContext)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  let button;

  let defaultReviewMessage = "Click on the add review button to review the resteraunt"

  return (
    <Wrapper>
      <CardWrapper>
      <InfoWrapper>
        <Title>{name}</Title>
        <Hours>Hours: {hours}</Hours>
        <Address>{address}</Address>
      </InfoWrapper>

      <RatingsWrapper>
        <Rating>Food Rating:<BeautyStars value={5} edit={false} size={15} /></Rating>
        <Rating>Price Rating:<BeautyStars value={3} edit={false} size={15} /></Rating>
        <Rating>Service Rating:<BeautyStars value={1.5} edit={false} size={15} /></Rating>
        <Rating>Overall Rating:<BeautyStars value={3.5} edit={false} size={15} /></Rating>
      </RatingsWrapper>

      <Review>{defaultReviewMessage}</Review>


      <OptionsWrapper>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle id="optionsButton" tag="button">
        <DotWrapper>...</DotWrapper>
        </DropdownToggle>
      <DropdownMenu>
      <Link to="/edit-restaurant" onClick={()=>{findID(id)}}><DropdownItem>Edit Restaurant</DropdownItem></Link>
        <DropdownItem onClick={()=> {props.DeleteRestaurant(id)}}>Delete Restaurant</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </OptionsWrapper>
      </CardWrapper>
      <Link to="/edit-review"><Button>Edit Review</Button></Link>
      <Link to="/add-review"><Button onClick={()=>{findID(id)}}>Add Review</Button></Link>
    </Wrapper>
  )
}