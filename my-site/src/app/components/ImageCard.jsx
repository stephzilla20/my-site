'use client'

import { useState, useEffect } from 'react';

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [images, onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-box" onClick={e => e.stopPropagation()}>
        {/* <button className="lightbox-close" onClick={onClose}>✕</button> */}
        <img src={images[current]} alt={`Photo ${current + 1}`} className="lightbox-img" />
        <div className="lightbox-footer">
          <button className="lightbox-nav" onClick={() => setCurrent(c => (c - 1 + images.length) % images.length)}>←</button>
          <span className="lightbox-count">{current + 1} / {images.length}</span>
          <button className="lightbox-nav" onClick={() => setCurrent(c => (c + 1) % images.length)}>→</button>
        </div>
        <div className="lightbox-thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumb ${i + 1}`}
              className={`lightbox-thumb${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CurrentlyCard({ title, desc, images = [] }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="image-card">
        {images.length > 0 && (
          <div className="image-card-thumbs">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} photo ${i + 1}`}
                className="image-card-thumb"
                onClick={() => setLightbox(i)}
              />
            ))}
          </div>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
