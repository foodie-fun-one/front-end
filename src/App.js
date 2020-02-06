import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from './components/Navigation/PrivateRoute';

import Login from './components/Authentication/Login';

import Signup from './components/Authentication/Signup';

import { Navigation } from './components/Navigation/Navigation';

import { AddRestaurant } from './components/Restaurants/AddRestaurant';
import { Dashboard } from './components/Restaurants/Dashboard';
import { EditRestaurant } from './components/Restaurants/EditRestaurant';

import { AddReview } from './components/Reviews/AddReview';
import { EditReview } from './components/Reviews/editReview';
import { Reviews } from './components/Reviews/Reviews';

import { RestrauntContext } from './contexts/RestrauntContext'

import { axiosWithAuth } from './Utils/AuthAxios'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`
function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [restrauntID, setRestrauntID] = useState(0)

  useEffect(() => {
    axiosWithAuth().get("/api/restaurants")
      .then(res => { setRestaurants(res.data) })
      .catch(err => console.log(err))
  }, [])

  const findID = (id) => {
    setRestrauntID(id)
  }


  return (
    <Wrapper>
      <Router>
        <RestrauntContext.Provider value={{restaurants, setRestaurants, findID, restrauntID}}>
        <Navigation />
          <Route exact path="/" />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/add-restaurant" component={AddRestaurant} />
          <PrivateRoute path="/edit-restaurant" component={EditRestaurant} />
          <PrivateRoute path="/explore" component={Dashboard} />
          <PrivateRoute path="/add-review" component={AddReview} />
          <PrivateRoute path="/edit-review" component={EditReview} />
          <PrivateRoute path="/reviews" component={Reviews} />
        </RestrauntContext.Provider>
      </Router>
    </Wrapper>
  )
}

export default App;
