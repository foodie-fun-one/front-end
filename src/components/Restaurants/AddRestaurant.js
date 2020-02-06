import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../../Utils/AuthAxios'

import { RestrauntContext } from '../../contexts/RestrauntContext'
const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(233, 109, 88, 0.8);
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

export const AddRestaurant = (props) => {
  const { restaurants, setRestaurants } = useContext(RestrauntContext)
  const [restaurant, setRestaurant] = useState({
    name: "",
    hours: "",
    address: "",
  })

  const handleChange = e => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    axiosWithAuth().post("/api/restaurants", restaurant)
    .then(res => {
      setRestaurants(restaurants.concat(restaurant))
    })
      .catch(err => console.log(err))
    props.history.push('/explore')
  }
  console.log(restaurants)
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <FormWrappers>
          <label htmlFor="name">Restaurant Name: </label>
          <Input
            type="input"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
          />
        </FormWrappers>

        <FormWrappers>
          <label htmlFor="hours">Restaurant Hours: </label>
          <Input
            type="input"
            name="hours"
            value={restaurant.hours}
            onChange={handleChange}
          />
        </FormWrappers>

        <FormWrappers>
          <label htmlFor="address">Restaurant Address: </label>
          <Input
            type="input"
            name="address"
            value={restaurant.address}
            onChange={handleChange}
          />
          <Button>Add Restaurant</Button>
        </FormWrappers>

      </Form>
    </Wrapper>
  )
}
