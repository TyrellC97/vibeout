import React, { useEffect, useState } from 'react'
import "./subscriberBar.css"
import Subscription from './subscription/Subscription'
import axios from "axios";


function subscriberBar() {
  let [subscribers, setSubscribers] = useState([{}])

  const url = "http://localhost:3001/getSubs"

  useEffect(() => {
     const fetchSubs = async () => { const result = await fetch(url)
    console.log(result)} 
    fetchSubs()
  }, [])


  return (
    <div className='side-bar'> 
      <h4 className="heading">Subscriptions</h4>
      <hr style={{color:'white'}}/>
     <Subscription /> 
      
    </div>
  )
}

export default subscriberBar
