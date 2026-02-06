import React from 'react';
import './StoryCard.css';

const StoryCard = ({ story, onFinish }) => {
    return (
        <div className="story-card-container">
            {story.imageUrl && (
                <div className="story-image-wrapper">
                    <img src={story.imageUrl} alt={story.title} className="story-image" onError={(e) => e.target.style.display = 'none'} />
                </div>
            )}
            <h1 className="story-title">{story.title}</h1>
            <p className="story-text">{story.content}</p>
            <button className="finish-btn" onClick={onFinish}>
                ¡Ya lo leí! 🌟
            </button>
        </div>
    );
};

export default StoryCard;
