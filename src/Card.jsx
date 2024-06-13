import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="leftinfo">
        <img src={props.imageUrl} style={{ width: "300px", height: "250" }} />
      </div>
      <div className="rightinfo">
        <h3>{props.location}</h3>
        <h2>{props.title}</h2>
        <p>
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description} </p>
      </div>
    </div>
  );
}

export default Card;
