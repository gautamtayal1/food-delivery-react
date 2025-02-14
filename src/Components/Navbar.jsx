export function Navbar() {

  return(
    <div className="navbar bg-gray-500 h-[12vh] flex justify-between p-[20px] items-center">
      <div className="left-nav">
        <img src="../src/assets/logo.png" className="h-[50px]"/>
      </div>
      <div className="right-nav">
        <button className=" text-2xl font-serif">Sign-In</button>
      </div>
    </div>
  )
}