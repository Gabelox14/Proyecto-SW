import React, { useState, useEffect } from 'react';

function App() {
  const names = ['Montero', 'Angel', 'Ari', 'Gabo', 'Amy'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentName, setCurrentName] = useState(names[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return <div>Hello {currentName}</div>;
}

export default App;
