import { MenuPage } from "./MenuPage"

export function ItemCategory({menuData}) {


  return(
    <div className="menuItem flex border-b-1 p-2 justify-center content-center">
        <div className="content w-[75%]">
        <h1 className="text-2xl font-bold">{menuData.card.card.title}</h1>
        <div className="menu-container">
           <MenuPage menuData={menuData.card.card.itemCards} />
        </div>
        
      </div>
    </div>
    
  )
}