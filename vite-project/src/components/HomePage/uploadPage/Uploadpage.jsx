import React from 'react'
import "./uploadpage.css"

function Uploadpage() {
  return (
    <div>
      <form action="submit">
        <input type="text" />
        <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
        <input type="text" name='tags'/>
        

      </form>
    </div>
  )
}

export default Uploadpage
