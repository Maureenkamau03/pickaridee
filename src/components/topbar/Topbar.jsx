import "./topbar.css"

export default function Topbar() {
  return (
    <div className="top">


    <div className="topLeft">
    <img className="topImg" src="car2.jpeg" alt="icon" />
        <h1 className="topicon">pickaride </h1>
    </div>
    <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              Home
            </li>
          
            <li className="topListItem">
           About
            </li>
            <li className="topListItem">
             Contact us
            </li>
           
        </ul>
    </div>
    <div className="topRight">
        
                <img className="topImg" src="car1.jpeg" alt="icon" />
          
                <ul className="topList">
                    <li className="topListItem">
                  Login
                    </li>

                    <li className="topListItem">
                        Register
                    </li>

                </ul>
        
        

        <i className="topsearch icon fa-solid fa-magnifying-glass"></i>
    </div>

</div>
)
}
