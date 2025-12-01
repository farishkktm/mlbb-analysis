import React from 'react';

const HeroCard = ({ hero }) => {
    return (
        <div className="hero-card">
            <h2>{hero.name}</h2>
            <p><strong>Role:</strong> {hero.role}</p>
            <p><strong>Specialty:</strong> {hero.specialty}</p>
            <h3>Stats:</h3>
            <ul>
                {Object.entries(hero.stats).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
            </ul>
        </div>
    );
};

export default HeroCard;
