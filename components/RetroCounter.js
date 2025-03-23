
"use client";
import { useState, useEffect } from 'react';

const RetroCounter = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Generate a random number between 10000 and 99999
    const randomCount = Math.floor(Math.random() * 90000) + 10000;
    setCount(randomCount);
  }, []);
  
  // Convert the count to an array of digits
  const digits = count.toString().split('');
  
  return (
    <div className="flex justify-center">
      {digits.map((digit, index) => (
        <div 
          key={index} 
          className="bg-black border-2 border-neon-green mx-1 w-10 h-12 flex items-center justify-center"
        >
          <span className="font-retro text-neon-green text-xl">{digit}</span>
        </div>
      ))}
    </div>
  );
};

export default RetroCounter;
