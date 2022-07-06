import React from 'react';
import './Item.css';

export const Item = ({id, name, category, image, price}) => {
  return (
    <>
    <div className="card">
      <div className="card__div-img">
          <img src={image} alt={name}/>
      </div>
      <div className="card__div-info">
          <h5>{name}</h5>
          <p>$ {price}</p>
          <p>Stock disponible: </p>
          <button>Ver más</button>
      </div>
    </div>
    </>
  );
};