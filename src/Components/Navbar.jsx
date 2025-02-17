import { Link } from "react-router"
import { addItem } from "../utils/cartSlice"
import { useSelector } from "react-redux"

export function Navbar() {

  const cartItems = useSelector((store) => store.cart.items)

  const handleAddItem = () => {
    dispatchEvent(addItem("pizza"))
  }

  return(
    <div className="navbar h-[12vh] flex justify-between p-[20px] items-center">
      <div className="left-nav">
        <Link to="/" >
          <img src="../src/assets/logo.png" className="h-[65px] rounded-2xl"/>
        </Link>
      </div>
      <div className="right-nav">
        <button className=" text-2xl font-serif p-4">
          <Link to="/" >Home</Link></button>
        <button className=" text-2xl font-serif p-4">
          <Link to ="/about">About</Link></button>
        <button className=" text-2xl font-serif p-4">
          <Link to ="contact">Contact Us</Link></button>
        <button className=" text-2xl font-serif p-4">
          <Link to ="cart">Cart({cartItems.length})</Link></button>
      </div>
    </div>
  )
}