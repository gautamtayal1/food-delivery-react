export function Navbar() {

  return(
    <div className="navbar h-[12vh] flex justify-between p-[20px] items-center">
      <div className="left-nav">
        <img src="../src/assets/logo.png" className="h-[65px] rounded-2xl"/>
      </div>
      <div className="right-nav">
        <button className=" text-2xl font-serif p-4">Home</button>
        <button className=" text-2xl font-serif p-4">About</button>
        <button className=" text-2xl font-serif p-4">Contact Us</button>
        <button className=" text-2xl font-serif p-4">Cart</button>
      </div>
    </div>
  )
}