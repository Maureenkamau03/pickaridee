import React from 'react'

export default function Singlecar() {
  return (
    <div className="singlecar">
    <div className="singlecarwrapper">
        <img className="singlecarimg" src="pex2.jpg" alt="" />
        <h1 className="singlecartittle">
        harrier
        </h1>
        <div className="singlecaredit">
            <i className="singlecaricon fa-solid fa-pen-to-square"></i>
            <i className="singlecaricon fa-solid fa-trash"></i>
           
        </div>
        <div className="singlecarinfo">
            <span className="singlecarprice">pricer: <b>ksh. 3m</b></span>
            <span className="singlepcarmodel">model:<b>Toyota</b></span>
        </div>
        <p className="singlepcardesc">Lorem ipsum, .
        dolor sit amet consectetur adipisicing elit. In earum
            </p>
    </div>
</div>
)
}
