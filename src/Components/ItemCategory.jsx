import { useState } from "react"
import { MenuPage } from "./MenuPage"

export function ItemCategory({menuData}) {
  const [clicked, setClicked] = useState(false)

  return(
    <div className="menuItem flex border-1 p-2 rounded-2xl justify-center content-center mb-3">
        <div className="content w-[75%]">
        <h1 
        className="text-2xl font-bold cursor-pointer"
        onClick={() => setClicked(!clicked)}
        >{menuData.card.card.title}</h1>

        <div className="menu-container">
           {clicked && <MenuPage menuData={menuData.card.card.itemCards} />}
        </div>
        
      </div>
    </div>
  )
}