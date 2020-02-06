import React, { useContext } from 'react';
import styled from 'styled-components'

import { RestrauntContext } from '../../contexts/RestrauntContext'

import { Restaurant } from './Restaurant'

import { axiosWithAuth } from '../../Utils/AuthAxios'

const Wrapper = styled.div`

`

export const Restaurants = () => {
  const { restaurants, setRestaurants } = useContext(RestrauntContext)
  
  const DeleteRestaurant = (id) => {
    axiosWithAuth().delete(`/api/restaurants/${id}`)
    .then(res => {
      setRestaurants(restaurants.filter(item => item.id !== id))
    })
    .catch(err => console.log(err))
  }
  
  return(
  <Wrapper>
    {restaurants.map((item) => <Restaurant 
    key={item.id} 
    restaurants={item} 
    setRestaurants={setRestaurants} 
    DeleteRestaurant={DeleteRestaurant}
    />)}
  </Wrapper>
)}