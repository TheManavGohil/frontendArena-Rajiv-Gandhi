import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import stories from "./StoryData";

const AtlantisStoryTeller = () => {
  const { speak, cancel } = useSpeechSynthesis();
  const [currentStory, setCurrentStory] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = (text) => {
    speak({ text });
    setIsSpeaking(true);
  };

  const handleNextStory = () => {
    cancel();
    setIsSpeaking(false);
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{stories[currentStory].title}</h1>
        <div className="flex items-center gap-6">
          <img src={stories[currentStory].image} alt={stories[currentStory].title} className="w-1/3 rounded-xl shadow-lg" />
          <div>
            <p className="text-lg mb-4">{stories[currentStory].text}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleSpeak(stories[currentStory].text)}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md"
              >
                {isSpeaking ? "Speaking..." : "Listen to Story"}
              </button>
              <button
                onClick={handleNextStory}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-md"
              >
                Next Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlantisStoryTeller;
