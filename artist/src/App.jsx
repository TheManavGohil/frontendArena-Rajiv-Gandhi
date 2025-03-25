// src/App.jsx
import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

function App() {
  const featuredArtists = [
    {
      name: "David Chen",
      specialty: "Digital Mixed Media",
      description: "Merging traditional techniques with digital innovation, Chen creates multi-layered works that blur the line between physical and virtual.",
      image:"i2.jpg"
    },
    {
      name: "Maya Williams", 
      specialty: "Neo-Impressionism",
      description: "Williams revisits impressionist techniques through a contemporary lens, creating vibrant landscapes that explore themes of climate change.",
      image: "i3.jpeg"
    },
    {
      name: "Hiroshi Tanaka",
      specialty: "Sculptural Installation", 
      description: "Tanaka's immersive installations transform spaces through light, sound, and interactive elements, inviting audiences to become part of the art.",
      image: 'i4.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Artist Spotlight Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artist Spotlight</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover the brilliant minds behind our featured collections and learn about their unique artistic journeys.
          </p>
        </div>

        {/* Featured Artist Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 bg-gray-100 p-8 rounded-lg">
            <div className="bg-gray-300 h-[500px] rounded-lg flex items-center justify-center text-gray-500">
              <img 
                src="i1.jpg" 
                alt="Clara Renoir Portrait" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm mr-4">
                  Artist of the Month
                </span>
                <div className="flex space-x-3">
                  <Twitter className="text-gray-700 hover:text-blue-500" />
                  <Instagram className="text-gray-700 hover:text-pink-500" />
                  <Linkedin className="text-gray-700 hover:text-blue-700" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Redefining Space and Emotion</h2>
              <p className="text-gray-700 mb-4">
                Clara Renoir has established herself as one of the most influential contemporary abstract expressionists of our time. Her work explores the relationship between spatial awareness and emotional resonance, creating immersive experiences that challenge the viewer's perception.
              </p>
              <p className="text-gray-700 mb-4">
                Born in Paris and educated in New York, Renoir brings a unique blend of European tradition and American innovation to her canvas. Her distinctive use of vibrant color fields and dynamic brushwork has earned her international acclaim.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-300 h-[200px] rounded-lg flex items-center justify-center text-gray-500">
                  <img 
                    src="artwork1.jpg" 
                    alt="Clara Renoir Artwork 1" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="bg-gray-300 h-[200px] rounded-lg flex items-center justify-center text-gray-500">
                  <img 
                    src="artwork2.jpg" 
                    alt="Clara Renoir Artwork 2" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-4 text-right">
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                  Explore Artist's Work
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Featured Artists */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredArtists.map((artist, index, image) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="bg-gray-300 h-[300px] rounded-lg mb-4 flex items-center justify-center text-gray-500">
                <img 
                  src={artist.image}
                  alt={`${artist.name} Portrait`} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
              <p className="text-gray-600 mb-2">{artist.specialty}</p>
              <p className="text-gray-700 mb-4">{artist.description}</p>
              <a href="#" className="text-black font-semibold hover:underline">
                View Profile →
              </a>
            </div>
          ))}
        </div>

        {/* Meet All Artists Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Meet All Featured Artists
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;