import { use, useState } from "react"
import { useEffect } from "react"
import { ResCard } from "./ResCard"

export function Main(){

    const [restaurantsList, setRestaurantList] = useState([])

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
         const res = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5416341&lng=73.8314762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
         let json = await res.json()

         setRestaurantList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.info.name)
        console.log(setRestaurantList);
        
    }
   

    return(
      <div className="main h-auto bg-red-300 mt-3 p-10 flex gap-[5vh] flex-wrap">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>

)
}