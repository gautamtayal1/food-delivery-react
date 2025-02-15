export function ResCard({ resData }) {

//name, rating, deliveryTime, cuisine, location, img

  return(
    <div className="card h-[300px] w-[20vw] bg-white overflow-hidden hover:border-2">
      <div className="imgDiv h-[70%] bg-gray-300">
         <img 
          src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} 
         className=" object-fill h-[100%] w-[100%] "
         />
      </div>
      <h1>{resData.info.name}</h1>
      <div>{resData.info.avgRating}.{resData.info.sla.deliveryTime} min</div>
      <div>{resData.info.cuisine}</div>
      <div>{resData.info.locality}</div>
    </div>
  )
}