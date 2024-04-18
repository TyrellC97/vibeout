import React, { useEffect, useState } from 'react'
import "./subscriberBar.css"
import Subscription from './subscription/Subscription'
import axios from "axios";


function subscriberBar() {
  let [subscribers, setSubscribers] = useState([{}])



  useEffect(() => {
    axios.get("http://localhost:3001/getSubs")
    .then(subs => setSubscribers(subs.data))
    .catch(err => console.log(err))
    console.log(subscribers)
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
