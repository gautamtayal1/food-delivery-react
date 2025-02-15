import { useEffect, useState } from "react"
import { RESTAURANT_URL } from "../utils/links"
import { MenuPage } from "./MenuPage"
import { useParams } from "react-router"

export default function RestaurantPage() {
  
  const [resMenu, setResMenu] = useState([])
  const [filteredMenu, setFilteredMenu] = useState([])
  const [input, setInput] = useState('')

  const { resId } = useParams()
  console.log(resId)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await fetch(RESTAURANT_URL + resId)
    const json = await data.json()
    const menu = 
    json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    console.log(menu);
    
    setResMenu(menu)
    setFilteredMenu(menu)
  }

  return(
    <div className="container flex justify-center h-auto rounded-2xl">
      <div className="page w-[65vw]">

        <h1 className=" text-5xl font-bold p-3">Pizza Hut</h1>
        <input type="text" 
        placeholder="Search for dishes" 
        className="h-[60px] border-1 rounded-2xl p-1 w-[90%] text-center"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        />
        <button 
        className="p-8"
        onClick={() => {
          const entry = input
          setResMenu(filteredMenu.filter((item) => item.card.info.name.toLowerCase().includes(entry.toLowerCase())))
        }}
        ><i class="fa-solid fa-magnifying-glass" /></button>

        <div className="menuContainer h-auto">
         {resMenu.map((data) => <MenuPage key = {data.card.info.id} menuData={data} />)}
        </div>
        
      </div>
    </div>

    
  )
}