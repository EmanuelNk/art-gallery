// ArtGallery.jsx

import React, { useState, useEffect } from 'react';
import './ArtGallery.css';
import Header from './components/Header';
import Introduction from './components/Introduction';

const artPieces = [
  {
    id: 1,
    title: 'Lion',
    imageUrl: '/images/lion.jpg',
    description: 'this is an art piece',
  },
  {
    id: 2,
    title: 'Parents Portrait',
    imageUrl: '/images/parents.jpg',
    description: 'this is an art piece',
  },
  {
    id: 3,
    title: 'Parents Horizontal',
    imageUrl: '/images/parents2.jpg',
    description: 'this is an art piece',
  },
  // ... More art pieces
];

const ArtGallery = () => {
  return (
    <div className="art-gallery">
      <Header /> {/* Include the Header component */}
      <Introduction /> {/* Include the Introduction component */}
      {artPieces.map((artPiece) => (
        <div key={artPiece.id} className="art-piece">
          <img src={process.env.PUBLIC_URL + artPiece.imageUrl} alt={artPiece.title} />
          <h2>{artPiece.title}</h2>
          <p>{artPiece.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;
