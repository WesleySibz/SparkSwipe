import React, { useState } from 'react';
import './App.css';  // Ensure the path matches your actual file structure

// Mock data - replace with your actual ideas
const mockIdeas = [
  { id: 1, title: "A social network for plant lovers", description: "Connect with other plant enthusiasts, share care tips, and trade cuttings." },
  { id: 2, title: "AI-powered recipe generator", description: "Enter ingredients you have and get personalized recipe suggestions." },
  { id: 3, title: "Virtual travel experience app", description: "Explore cities and landmarks in VR without leaving your home." },
  { id: 4, title: "Skill-sharing marketplace", description: "Trade skills with others - teach what you know, learn what you don't." },
  { id: 5, title: "Gamified recycling app", description: "Earn points and compete with friends by tracking your recycling habits." }
];

const IdeaSwiperApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedIdeas, setLikedIdeas] = useState([]);
  const [dislikedIdeas, setDislikedIdeas] = useState([]);
  
  const currentIdea = mockIdeas[currentIndex];
  
  const handleSwipe = (liked) => {
    if (liked) {
      setLikedIdeas([...likedIdeas, currentIdea]);
    } else {
      setDislikedIdeas([...dislikedIdeas, currentIdea]);
    }
    
    // Move to next idea
    if (currentIndex < mockIdeas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  // Check if we've gone through all ideas
  const isFinished = currentIndex >= mockIdeas.length - 1;
  
  return (
    <div className="main-container mx-auto p-8">
      <h1 className="title-h1">SparkSwipe</h1>
      
      {!isFinished ? (
        <div className="output-container mt-8">
          <div className="idea-card bg-white rounded-lg shadow p-6 mb-4">
            <h2 className="title font-semibold mb-2">{currentIdea.title}</h2>
            <p className="description">{currentIdea.description}</p>
          </div>
          
          <div className="button-container">
            <button 
              onClick={() => handleSwipe(false)}
              className="dislike-btn"
            >
              X
            </button>
            <button 
              onClick={() => handleSwipe(true)}
              className="like-btn"
            >
              ✔
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You've reviewed all ideas!</h2>
          <p className="mb-2">Liked ideas: {likedIdeas.length}</p>
          <p>Disliked ideas: {dislikedIdeas.length}</p>
          
          {likedIdeas.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Your liked ideas:</h3>
              <ul className="bg-white rounded-lg shadow p-4">
                {likedIdeas.map(idea => (
                  <li key={idea.id} className="mb-2 pb-2 border-b last:border-0">
                    <p className="font-medium">{idea.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IdeaSwiperApp;
