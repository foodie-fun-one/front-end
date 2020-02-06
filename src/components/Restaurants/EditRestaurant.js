import React, { useState, useContext } from 'react'

import styled from 'styled-components'
import { axiosWithAuth } from '../../Utils/AuthAxios'
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

export const EditRestaurant = (props) => {
  const {restrauntID, restaurants } = useContext(RestrauntContext);

  const [editRestaurant, setEditRestaurant] = useState({
    id: restrauntID,
    name: "",
    hours: "",
    address: "",
  })

  const handleChange = e => {
    setEditRestaurant({
      ...editRestaurant,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/api/restaurants/${restrauntID}`, editRestaurant)
    .then(res => {
      console.log(restaurants)
      console.log(editRestaurant)
      props.history.push('/explore')
      const edittedRestraunt = restaurants.map(el => el.id)
      const indexOfChangedRestraunt = edittedRestraunt.indexOf(restrauntID)
      // setRestaurants(...restaurants, restaurants[indexOfChangedRestraunt] = editRestaurant)
    })
    .catch(err => console.log(err))
    console.log(restaurants)
  }
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <FormWrappers>
          <label htmlFor="name">Restaurant Name: </label>
          <Input
            type="input"
            name="name"
            value={editRestaurant.name}
            onChange={handleChange}
          />
        </FormWrappers>

        <FormWrappers>
          <label htmlFor="hours">Restaurant Hours: </label>
          <Input
            type="input"
            name="hours"
            value={editRestaurant.hours}
            onChange={handleChange}
          />
        </FormWrappers>

        <FormWrappers>
          <label htmlFor="address">Restaurant Address: </label>
          <Input
            type="input"
            name="address"
            value={editRestaurant.address}
            onChange={handleChange}
          />
          <Button>Change Restaurant</Button>
        </FormWrappers>

      </Form>
    </Wrapper>
  )

}