import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

export function MenuPage({menuData}) {

  const dispatch = useDispatch()

  const handleAddItem = () => {
    dispatch(addItem("pizza"))
  }

  return(
    <div className="">
      {menuData.map((item) => (
        <div className="menuItem flex border-b-1 p-2 justify-center content-center">
          <div className="content w-[75%]">
          <div className=" font-medium text-2xl">{item.card.info.name}</div>
          <div className="price">₹{item.card.info.defaultPrice/100}</div>
          <div className="rating">{item.card.info.ratings.aggregatedRating.rating}({item.card.info.ratings.aggregatedRating.ratingCount})</div>
          <div className="description text-[12px]">{item.card.info.description}</div>
        </div>
        <div className="image h-[30%] p-1">
          <div className="absolute">
            <button 
            className="bg-white p-2 rounded-2xl border text-green-500"
            onClick={() => handleAddItem(item)}>
              ADD+
            </button>
          </div>
          <img 
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}
          className=" object-fill h-[60%] rounded-3xl"
          />
          </div>
        </div>
      ))}
    </div>
  )
}