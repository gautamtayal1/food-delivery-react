export function ResCard({ resData }) {

  return(
    <div 
    className="card w-[20vw] bg-gray-100 overflow-hidden p-1 hover:border-4 border-orange-400 rounded-2xl">
      <div className="imgDiv h-[70%] mb-1">
         <img 
          src= 
          {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} 
         className=" object-fill h-[100%] w-[100%] rounded-2xl"
         />
      </div>
      <h1 
      className=" font-semibold text-2xl">{resData.info.name}</h1>
      <div 
      className=" font-semibold text-gray-700">{resData.info.avgRating}⭐️ • {resData.info.sla.deliveryTime} min</div>
      <div 
      className=" text-gray-500">{resData.info.locality}</div>
      <div 
      className=" text-gray-500">{resData.info.costForTwo}</div>
    </div>
  )
}