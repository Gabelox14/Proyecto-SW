import React, { useState, useEffect } from 'react';

function App() {
  const names = ['Montero', 'Angel', 'Ari', 'Gabo', 'Amy'];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [names.length]);

  const currentName = names[currentNameIndex];

  return <div>Hello {currentName}</div>;
}

export default App;
