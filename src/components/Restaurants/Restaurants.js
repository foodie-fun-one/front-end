import React, { useContext } from 'react';
import styled from 'styled-components'

import { RestrauntContext } from '../../contexts/RestrauntContext'

import { Restaurant } from './Restaurant'

import { axiosWithAuth } from '../../Utils/AuthAxios'

const Wrapper = styled.div`
  font-family: 'Varela Round', sans-serif;
`

export const Restaurants = () => {
  const { refresh, restaurants } = useContext(RestrauntContext)
  
  const DeleteRestaurant = (id, reviewID) => {
    axiosWithAuth().delete(`/api/restaurants/${id}`)
    .then(res => {
      console.log(res)
      refresh()
    })
    .catch(err => console.log(err))

    if(reviewID){
    axiosWithAuth().delete(``)
      
    }
  }
  
  return(
  <Wrapper>
    {restaurants.map((item) => <Restaurant 
    key={item.id} 
    restaurants={item} 
    DeleteRestaurant={DeleteRestaurant}
    />)}
  </Wrapper>
)}