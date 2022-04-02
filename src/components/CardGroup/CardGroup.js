import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Laptop pro', price: 125000 },
        { id: 2, name: 'Laptop crow', price: 125000 },
        { id: 3, name: 'Laptop grow', price: 125000 }
    ]
    return (
        <div>
            <h1>This is CardGroup</h1>
            <div className="card-group">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;