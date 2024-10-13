import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/main.scss";

const ArtGallery = () => {
  const [artPieces, setArtPieces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const fetchRandomArt = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.REACT_APP_API_KEY}&format=json&ps=100`
      );
      const shuffledArtPieces = shuffle(data.artObjects).slice(0, 3);
      setArtPieces(shuffledArtPieces);
    } catch (error) {
      console.error("Error fetching random art:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomArt();
  }, [fetchRandomArt]);

  const handleNav = (artPiece) => {
    navigation(`/${artPiece.objectNumber}`, { state: { artPiece } });
  };

  return (
    <div>
      <header className="bg-header">
        <div className="gallery">
          {artPieces.map((artPiece, index) => (
            <div
              key={index}
              className="gallery__art-card"
              onClick={() => handleNav(artPiece)}
            >
              <img src={artPiece.webImage.url} alt={artPiece.title} />
            </div>
          ))}
        </div>
        <button className="btn" onClick={fetchRandomArt} disabled={isLoading}>
          {isLoading ? "Loading..." : "Shuffle"}
        </button>
      </header>
    </div>
  );
};

export default ArtGallery;
