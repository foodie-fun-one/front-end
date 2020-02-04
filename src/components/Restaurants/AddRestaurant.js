import React, { useState } from 'react'
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
`

export const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    hours: "",
    address: "",
  })

  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Wrapper>
      <Form>
        <FormWrappers>
          <label for="name">Restaurant Name: </label>
          <input
            type="input"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
          />
        </FormWrappers>

        <FormWrappers>
          <label for="hours">Restaurant Hours: </label>
          <input
            type="input"
            name="hours"
            value={restaurant.hours}
            onChange={handleChange}
          />
        </FormWrappers>

        <FormWrappers>
          <label for="address">Restaurant Address: </label>
          <input
            type="input"
            name="address"
            value={restaurant.address}
            onChange={handleChange}
          />
        </FormWrappers>

      </Form>
    </Wrapper>
  )
}
