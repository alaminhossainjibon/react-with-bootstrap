import React from 'react';

const Card = (props) => {
    const { name, price, img } = props.product;
    return (
        <div className="card">
            <img src="https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">name: {name}</h5>
                <p className="card-text">price: {price}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
};

export default Card;