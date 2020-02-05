import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BeautyStars from 'beauty-stars';

const Wrapper = styled.div`
  border: 1px solid gray;
  margin: 2% 0;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 50%;
`

const InfoWrapper = styled.div`
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
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;
  padding: 25%;
  margin: 0%;
  
  &:hover{
    text-decoration: underline;
  }
`

const DotWrapper = styled.div`
  font-size: 1.5rem;
`

export const Restaurant = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Wrapper>
      <InfoWrapper>
        <Title>Restaurant Name!</Title>
        <Hours>Hours: 8:30-2:30</Hours>
        <Address>12345 StreetName Rd. City, State</Address>
      </InfoWrapper>

      <RatingsWrapper>
        <Rating>Food Rating:<BeautyStars value={5} edit={false} size={15} /></Rating>
        <Rating>Price Rating:<BeautyStars value={3} edit={false} size={15} /></Rating>
        <Rating>Service Rating:<BeautyStars value={1.5} edit={false} size={15} /></Rating>
        <Rating>Overall Rating:<BeautyStars value={3.5} edit={false} size={15} /></Rating>
      </RatingsWrapper>

      <Review>Food was great!</Review>

      <Link to="/edit-review"><Button>Edit Review</Button></Link>

      <OptionsWrapper>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="optionsButton" color="light" tag="button">
        <DotWrapper>...</DotWrapper>
        </DropdownToggle>
      <DropdownMenu>
      <Link to="/edit-restaurant"><DropdownItem>Edit Restaurant</DropdownItem></Link>
        <DropdownItem>Delete Restaurant</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </OptionsWrapper>

    </Wrapper>
  )
}