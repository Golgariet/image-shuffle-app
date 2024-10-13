import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ArtDetail = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const artPiece = location.state?.artPiece;

  return (
    <div className="art-detail">
      <h1 className="art-detail__title">{artPiece.title}</h1>
      <img
        className="art-detail__image"
        src={artPiece.webImage.url}
        alt={artPiece.title}
      />
      <p className="art-detail__artist">
        <strong>Artist:</strong> {artPiece.principalOrFirstMaker}
      </p>
      <p className="art-detail__object-number">
        <strong>Object Number:</strong> {artPiece.objectNumber}
      </p>
      <button className="btn" onClick={() => navigation(-1)}>
        Back to Gallery
      </button>
    </div>
  );
};

export default ArtDetail;
