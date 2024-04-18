import React from 'react'
import "./homepage.css"
import SubscriberBar from "../subscriptionBar/SubscriberBar"
import MainContent from './MainContent/MainContent'

function Homepage() {
  return (
    <div className='main'>
     <SubscriberBar />
     <MainContent />
    </div>
  )
}

export default Homepage
