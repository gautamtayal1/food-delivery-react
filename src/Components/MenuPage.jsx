export function MenuPage({menuData}) {

  return(
    <div className="menuItem flex border-b-1 p-2 justify-center content-center">
        <div className="content w-[75%]">
        <h1 className=" font-medium text-2xl">{menuData.card.info.name}</h1>
        <div className="price">₹{menuData.card.info.defaultPrice/100}</div>
        <div className="rating">{menuData.card.info.ratings.aggregatedRating.rating}({menuData.card.info.ratings.aggregatedRating.ratingCount})</div>
        <div className="description text-[12px]">{menuData.card.info.description}</div>
      </div>
      <div className="image h-[30%] p-1">
        <img 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + menuData.card.info.imageId}
        className=" object-fill h-[60%] rounded-3xl"
        />
      </div>
    </div>
    
  )
}