import React, { useMemo, useEffect, useRef, useState } from "react";

import {
  class2025,
  arts1,
  carousel5,
  athletics5,
  athletics,
  athletics1,
  student_life1,
  athletics3,
  athletics4,
  student_life3,
  showcase20,
  teams,
  student_life2,
  aleveluniform,
  chess,
  showcase17,
} from "../assets/index";

const galleryItems = [
  { id: 1, image: student_life3, size: "tall", alt: "Students group 1" },
  { id: 2, image: arts1, size: "normal", alt: "Students group 2" },
  { id: 3, image: teams, size: "wide", alt: "Students group 3" },
  { id: 4, image: carousel5, size: "normal", alt: "Students group 4" },
  { id: 5, image: aleveluniform, size: "tall", alt: "Students group 5" },
  { id: 6, image: athletics1, size: "wide", alt: "Students group 6" },
  { id: 7, image: student_life1, size: "wide", alt: "Students group 7" },
  { id: 8, image: showcase17, size: "wide", alt: "Students group 8" },
  { id: 9, image: athletics3, size: "normal", alt: "Students group 9" },
  { id: 10, image: athletics4, size: "normal", alt: "Students group 10" },
  { id: 11, image: showcase20, size: "normal", alt: "Students group 11" },
  { id: 12, image: athletics, size: "normal", alt: "Students group 12" },
  { id: 13, image: chess, size: "normal", alt: "Students group 13" },
  { id: 14, image: class2025, size: "wide", alt: "Students group 14" },
  { id: 15, image: student_life2, size: "normal", alt: "Students group 15" },
  { id: 16, image: athletics5, size: "wide", alt: "Students group 16" },
];

const groupSize = 10;

export default function StudentLifeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const thumbnailRefs = useRef([]);

  const groups = useMemo(() => {
    const result = [];

    for (let i = 0; i < galleryItems.length; i += groupSize) {
      result.push(galleryItems.slice(i, i + groupSize));
    }

    return result;
  }, []);

  // This rotates the mobile preview images on every page reload.
  // It picks a random starting image, then takes 6 images from there.
  const mobilePreviewItems = useMemo(() => {
    const startIndex = Math.floor(Math.random() * galleryItems.length);

    return Array.from({ length: 6 }, (_, index) => {
      return galleryItems[(startIndex + index) % galleryItems.length];
    });
  }, []);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const changeSlide = (newIndex) => {
    if (newIndex === selectedIndex) return;

    setIsFading(true);

    setTimeout(() => {
      setSelectedIndex(newIndex);
      setIsFading(false);
    }, 180);
  };

  const showPrev = () => {
    if (selectedIndex === null) return;

    const newIndex =
      selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1;

    changeSlide(newIndex);
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    const newIndex =
      selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1;

    changeSlide(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    thumbnailRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleScrollClose = () => {
      closeLightbox();
    };

    window.addEventListener("wheel", handleScrollClose, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScrollClose);
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Mobile version only */}
      <section className="mobile-student-life-section md:hidden">
        <div className="mobile-student-life-container">
          <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">
            Student Life at Amazon Christian Academy
          </h1>

          <div className="mobile-student-life-grid">
            {mobilePreviewItems.map((item, index) => {
              const originalIndex = galleryItems.findIndex(
                (galleryItem) => galleryItem.id === item.id
              );

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`mobile-student-life-card ${
                    index === 0 ? "feature" : ""
                  } ${index === 3 ? "wide" : ""}`}
                  onClick={() => openLightbox(originalIndex)}
                  aria-label={`Open ${item.alt}`}
                  title={item.alt}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="mobile-student-life-btn"
            onClick={() => {
              const firstPreviewIndex = galleryItems.findIndex(
                (galleryItem) => galleryItem.id === mobilePreviewItems[0].id
              );

              openLightbox(firstPreviewIndex);
            }}
          >
            View all
          </button>
        </div>
      </section>

      {/* Desktop version */}
      <section className="student-life-section hidden md:block">
        <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">
          Student Life at Amazon Christian Academy
        </h1>

        <div className="student-life-list">
          {groups.map((group, groupIndex) => (
            <div className="student-life-block" key={groupIndex}>
              <div className="student-life-grid">
                {group.map((item) => {
                  const originalIndex = galleryItems.findIndex(
                    (galleryItem) => galleryItem.id === item.id
                  );

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`gallery-card ${item.size}`}
                      onClick={() => openLightbox(originalIndex)}
                      aria-label={`Open ${item.alt}`}
                      title={item.alt}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shared lightbox for both mobile and desktop */}
      {selectedIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            type="button"
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close slideshow"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="lightbox-viewer" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-content">
              <img
                src={galleryItems[selectedIndex].image}
                alt={galleryItems[selectedIndex].alt}
                className={`lightbox-image ${
                  isFading ? "fade-out" : "fade-in"
                }`}
              />
            </div>

            <div className="lightbox-counter">
              {selectedIndex + 1} / {galleryItems.length}
            </div>

            <div className="lightbox-thumbnails scrollbar-hide">
              <div className="lightbox-thumbnails-inner">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.id}
                    ref={(el) => (thumbnailRefs.current[index] = el)}
                    type="button"
                    onClick={() => changeSlide(index)}
                    className={`lightbox-thumbnail ${
                      selectedIndex === index ? "active" : ""
                    }`}
                    aria-label={`View ${item.alt}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}