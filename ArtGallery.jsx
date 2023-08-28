import React from 'react';
import './ArtGallery.css';

const artPieces = [
  {
    id: 1,
    title: 'Art Piece 1',
    imageUrl: '...',
    description: 'Description for art piece 1...',
  },
  // ... More art pieces
];

const ArtGallery = () => {
  return (
    <div className="art-gallery">
      {artPieces.map((artPiece) => (
        <div key={artPiece.id} className="art-piece">
          <img src={artPiece.imageUrl} alt={artPiece.title} />
          <h2>{artPiece.title}</h2>
          <p>{artPiece.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;
