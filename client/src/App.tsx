import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';

export default function App() {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlash(false), 3000); // 3-second flash screen
    return () => clearTimeout(timer);
  }, []);

  // Flash Screen
  if (showFlash) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400">
        <div className="text-center animate-pulse">
          {/* Replace with your logo if available */}
          <h1 className="text-7xl font-black text-white">RoadGuard</h1>
        </div>
      </div>
    );
  }

  // Redirect to Home page after flash screen
  return <Home />;
}
