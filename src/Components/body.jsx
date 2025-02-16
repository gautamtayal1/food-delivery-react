import { useState } from "react"
import { ResCard , withPromoted} from "./ResCard"
import { Link } from "react-router"
import UseResData from "../utils/useResData"

export function Body(){
    const [input, setInput] = useState('')

    const {restaurantsList, setRestaurantList} = UseResData()

    const PromotedResCard = withPromoted(ResCard)

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
            const list = restaurantsList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(input.toLocaleLowerCase()))
            setRestaurantList(list)
          }}
          >Search</button>
          <button 
          className=" border-1 p-2 rounded-2xl"
          onClick={() => {
            const list = restaurantsList.filter((restaurant) => restaurant.info.avgRating > 4.2)
            setRestaurantList(list)
          }}
          >
            High Rated</button>
        </div>

        {/* restaurant card container */}

        <div className="main h-auto mt-3 p-10 flex gap-[5vh] flex-wrap bg-gray-100">
          {restaurantsList.map((data) => (
            <Link 
              key={data.info.id}
              to={`/restaurant/${data.info.id}`}
            >
              {data.info.promoted ? <PromotedResCard resData={data} /> : <ResCard resData={data}/>}
            </Link>
          ))}
        </div>

      </div>
  
    )
}