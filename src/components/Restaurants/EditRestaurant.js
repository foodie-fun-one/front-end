import React, { useState, useContext, useEffect } from 'react'

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
border-radius: 5px;
padding: 0.5rem 0;
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

export const EditRestaurant = (props) => {
  const { refresh, fetchedID } = useContext(RestrauntContext);

  const [editRestaurant, setEditRestaurant] = useState({
    id: 0,
    name: "",
    address: "",
    hours: "",
  })

  const handleChange = e => {
    setEditRestaurant({
      ...editRestaurant,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=> {
    axiosWithAuth().get(`/api/restaurants/${fetchedID}`)
    .then(res =>{
      setEditRestaurant({
        id: fetchedID,
        name: res.data.name,
        address: res.data.address,
        hours: res.data.hours,
      })
    })
    .catch(err => console.log(err))
    }, [])

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/api/restaurants/${fetchedID}`, editRestaurant)
    .then(res => {
      console.log(res)
      props.history.push('/explore')
      refresh();
    })
    .catch(err => console.log(err))
  }
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <H1 style={{ fontFamily: "Mogra"}}>Edit Restaurant</H1>
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