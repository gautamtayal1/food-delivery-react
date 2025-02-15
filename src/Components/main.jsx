import { useState } from "react"
import { useEffect } from "react"
import { ResCard } from "./ResCard"

export function Main(){
    const [restaurantsList, setRestaurantList] = useState([])
    const [searchList, setSearchList] = useState([])
    const [starList, setStarList] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        const res = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5416341&lng=73.8314762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let json = await res.json()

        setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setStarList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setSearchList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
    }

    return(
      <div className="main bg-gray-100 p-2">
        {/* filter bar */}

        <div className="filterBar flex gap-4 mt-3 ml-2 bg-gray-100">
          <input type="text"  
          className=" border-1 rounded-2xl" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button 
          className=" border-1 p-2 rounded-2xl"
          onClick={() => {
            const list = searchList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(input.toLocaleLowerCase()))
            setRestaurantList(list)
          }}
          >Search</button>
          <button 
          className=" border-1 p-2 rounded-2xl"
          onClick={() => {
            const list = starList.filter((restaurant) => restaurant.info.avgRating > 4.2)
            setRestaurantList(list)
          }}
          >
            High Rated</button>
        </div>

        {/* restaurant card container */}

        <div className="main h-auto mt-3 p-10 flex gap-[5vh] flex-wrap bg-gray-100">
            {restaurantsList.map((data) => (<ResCard key={data.info.id}  resData={data} />))}
        </div>

      </div>
  
    )
}