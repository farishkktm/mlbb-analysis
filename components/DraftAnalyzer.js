import React from 'react';

const DraftAnalyzer = ({ teamComposition }) => {
    const analyzeComposition = () => {
        // Logic to analyze team composition
        // This is just a placeholder logic
        const results = teamComposition.map((hero) => {
            return `Hero: ${hero.name}, Role: ${hero.role}`;
        });
        return results.join('\n');
    };

    return (
        <div>
            <h2>Team Composition Analysis</h2>
            <pre>{analyzeComposition()}</pre>
        </div>
    );
};

export default DraftAnalyzer;