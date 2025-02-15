import { useState } from "react"

export function FilterBar() {


  
  return(
    <div className="filterBar flex gap-4 mt-3 ml-2">
      <input type="text"  className=" border-1 rounded-2xl"/>
      <button className=" border-1 p-2 rounded-2xl">Search</button>
      <button 
      className=" border-1 p-2 rounded-2xl"
      // onClick={}
      >
        Rating 4+</button>
    </div>
  )
}