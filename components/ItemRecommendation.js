import React from 'react';

const ItemRecommendation = ({ items }) => {
    return (
        <div className="item-recommendation">
            <h2>Recommended Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="item">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>Price: {item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemRecommendation;
