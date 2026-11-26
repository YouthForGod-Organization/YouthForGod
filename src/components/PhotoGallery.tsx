// Presents six past-conference photos in a static, equally sized grid.
import { useEffect, useRef, useState } from "react";
import { conferencePhotos } from "../data/conferencePhotos";
import "./PhotoGallery.scss";

export function PhotoGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedPhoto = selectedIndex === null ? null : conferencePhotos[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedIndex === null || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [selectedIndex]);

  return (
    <section className="photo-gallery" aria-label="Conference photo gallery">
      <div className="container">
        <div className="photo-gallery__intro">
          <h2 className="photo-gallery__title">Past Conference moments</h2>
          <p>Select a photo to view it in full.</p>
        </div>
        <div className="photo-gallery__grid">
          {conferencePhotos.map((photo, index) => (
            <button
              className="photo-gallery__tile"
              type="button"
              key={photo.src}
              aria-label={`View photo: ${photo.alt}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                event.currentTarget.focus();
                setSelectedIndex(index);
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ objectPosition: photo.position }}
                loading="lazy"
                decoding="async"
              />
              <span className="photo-gallery__expand" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="photo-gallery__dialog"
        aria-label="Conference photo viewer"
        aria-describedby="photo-gallery-caption"
        onClose={() => setSelectedIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="photo-gallery__viewer">
          <button
            className="photo-gallery__close"
            type="button"
            aria-label="Close photo"
            onClick={() => dialogRef.current?.close()}
          >
            <span aria-hidden="true">×</span> Close
          </button>
          {selectedPhoto && <img src={selectedPhoto.src} alt={selectedPhoto.alt} />}
          <p id="photo-gallery-caption">{selectedPhoto?.alt}</p>
        </div>
      </dialog>
    </section>
  );
}
