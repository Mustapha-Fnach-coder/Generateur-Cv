import React from 'react';
import CvGenerator from './components/CvGenerator';

const App = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Formulaire CV</h1>
      <CvGenerator />
    </div>
  );
};

export default App;