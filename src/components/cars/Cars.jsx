import React from "react";
import "./cars.css";
// import Car from "../car/Car"
export default function Cars() {
  return (
    <div className="cars">
      
      <div className="car">
        <img
          className="carimg"
          src="https://www.mastercars.co.za/content/dam/dwa/importers/za/dwa-3/homepage/about-mastercars.jpg.renditions.16_9.1344w.webp"
          alt=""
        />
        <div className="carinfo">
          <span className="cartittle">harrier</span>
          <hr />
          <span className="carprice">Ksh. 3M</span>
        </div>
        </div>


        <div className="car">
          <img
            className="carimg"
            src="https://www.mastercars.co.za/content/dam/dwa/importers/za/dwa-3/homepage/mastercars-brand-promise.jpg.renditions.16_9.1344w.webp"
            alt=""
          />
          <div className="carinfo">
            <span className="cartittle">benz</span>
            <hr />
            <span className="carprice">Ksh. 4M</span>
          </div>
        </div>

        <div className="car">
          <img
            className="carimg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMV_B8avU49dixJUmTqdQ_WZkE77o8TeU8og&usqp=CAU"
            alt=""
          />
          <div className="carinfo">
            <span className="cartittle">hillux</span>
            <hr />
            <span className="carprice">Ksh. 4M</span>
          </div>
        </div>


        <div className="car">
          <img
            className="carimg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpye1qI0UT-arYOBtzCe0v2ot5Z4ES_CswpngV5JiJac2tz7Ghk3tVtM-CweiWzgTyt5Y&usqp=CAU"
            alt=""
          />
          <div className="carinfo">
            <span className="cartittle">probox</span>
            <hr />
            <span className="carprice">Ksh. 4M</span>
          </div>
        </div>


        <div className="car">
          <img
            className="carimg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGNIVQi5kJIPYk-XLOstk99ixWS2wuEsTQg&usqp=CAU"
            alt=""
          />
          <div className="carinfo">
            <span className="cartittle">corola</span>
            <hr />
            <span className="carprice">Ksh. 4M</span>
          </div>
        </div>
    
        <div className="car">
          <img
            className="carimg"
            src="https://img.etimg.com/thumb/msid-55455595,width-640,height-480,imgsize-185485,resizemode-4/mercedes-benz-s600-w221-pullman-guard-180000.jpg"
            alt=""
          />
          <div className="carinfo">
            <span className="cartittle">wish</span>
            <hr />
            <span className="carprice">Ksh. 4M</span>
          </div>
        </div>
      </div>
    
  );
}
