import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to MLBB Analysis!</h1>
            <div className="features">
                <div className="feature-card">
                    <h2>Hero Information</h2>
                    <p>Explore detailed information about each hero.</p>
                </div>
                <div className="feature-card">
                    <h2>Item Recommendations</h2>
                    <p>Get the best item builds for your heroes.</p>
                </div>
                <div className="feature-card">
                    <h2>Emblem Guides</h2>
                    <p>Find the optimal emblem setups for your heroes.</p>
                </div>
                <div className="feature-card">
                    <h2>Draft Analyzer</h2>
                    <p>Analyze your draft and improve your game strategy.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
