import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Wrapper = styled.div`
  border: 1px solid gray;
  margin: 2% 0;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const RatingsWrapper = styled.div`
  width: 20%;
  width: 190px;
`

const OptionsWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`

const Rating = styled.div`
  display: flex;
  text-align: left;
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
  width: 45%;
  border: 1px solid gray;
  margin: 0%;
  height: 12.5vh;
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
        {/* <Rating>Food Rating:<ReactStars count={5} value={5} edit={false} size={18} /></Rating>
        <Rating>Price Rating:<ReactStars count={5} value={3} edit={false} size={18} /></Rating>
        <Rating>Service Rating:<ReactStars count={5} value={1.5} edit={false} size={18} /></Rating>
        <Rating>Overall Rating:<ReactStars count={5} value={3.5} edit={false} size={18} /></Rating> */}
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