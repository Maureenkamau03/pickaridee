import "./car.css"

export default function Car() {
  return (
    <div className='car'>
    <img className="carimg"
      src="car1.jpeg" alt=""
    />
    <div className="carinfo">
      <span className="cartittle">
        harrier
      </span>
      <hr />
      <span className="carprice">Ksh. 3M</span>
    </div>
  
  </div>
)
}

