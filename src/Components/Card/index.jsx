import React from 'react';
import './Card.css';

const Card = ({ data, onIncrement }) => {
    const handleIncrement = () => {
        if (onIncrement) {
            onIncrement();
        }
    };

    return (
        <div className="card-container">
            <div className="card-image-container">
                <img src={data.photo} alt={data.name} className="card-image" />
                <div className="add-to-cart" onClick={handleIncrement}>
                    +
                </div>
            </div>

            <div className="card-details">
                <p className="text-year">{data.year}</p>
                <p className="text-price">${data.price}</p>
            </div>
        </div>
    );
};

export default Card;


/* , el componente Card muestra información sobre algún objeto
  (probablemente relacionado con ventas) 
y proporciona la capacidad de ejecutar una 
función de incremento cuando se hace clic en un botón específico. */