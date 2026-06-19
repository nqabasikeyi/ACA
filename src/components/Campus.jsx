import { Cancel } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import {
  coverpage,
  showcase,
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  showcase6,
  showcase7,
  showcase8,
  showcase9,
  showcase10,
  showcase11,
  showcase12,
  showcase13,
  showcase14,
  showcase15,
  showcase16,
  showcase17,
  showcase18,
  showcase19,
  showcase20,
  arts1,
  campus1
} from "../assets/index";

import "react-lazy-load-image-component/src/effects/blur.css";

Modal.setAppElement("#root");

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const thumbnailRefs = useRef([]);

  const campusImages = [
    coverpage,
    showcase,
    showcase1,
    arts1,
    showcase2,
    showcase3,
    showcase4,
    showcase5,
    showcase6,
    showcase7,
    showcase8,
    showcase9,
    showcase10,
    showcase11,
    showcase12,
    showcase13,
    showcase14,
    showcase15,
    showcase16,
    showcase17,
    showcase18,
    showcase19,
    showcase20,
    campus1
  ];

  const openImageModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const changeImage = (newIndex) => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setSelectedImage(campusImages[newIndex]);
      setIsFading(false);
    }, 180);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % campusImages.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex =
      (currentImageIndex - 1 + campusImages.length) % campusImages.length;
    changeImage(newIndex);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImageModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleScrollClose = () => {
      closeImageModal();
    };

    window.addEventListener("wheel", handleScrollClose, { passive: true });
    window.addEventListener("touchmove", handleScrollClose, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScrollClose);
      window.removeEventListener("touchmove", handleScrollClose);
    };
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;

    thumbnailRefs.current[currentImageIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentImageIndex, selectedImage]);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-4">
        <section>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-indigo-700">
            Campus Showcase
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {campusImages.map((imageUrl, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-xl shadow-md cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => openImageModal(imageUrl, index)}
              >
                <img
                  src={imageUrl}
                  alt={`Campus Image ${index + 1}`}
                  className="w-full h-40 object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-all duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-semibold opacity-100 group-hover:scale-105 transition-transform duration-300">
                    Click to enlarge
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 mt-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-indigo-700">
            Campus Video Showcase
          </h2>
          <p>Coming Soon...</p>
        </section>

        {/* IMAGE SLIDESHOW MODAL */}
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeImageModal}
          contentLabel="Campus Slideshow"
          className="outline-none w-full h-full"
          overlayClassName="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center px-3 md:px-8">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-50 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 transition"
              aria-label="Close slideshow"
            >
              <Cancel style={{ fontSize: "2rem" }} />
            </button>

            <div className="relative w-full flex-1 flex items-center justify-center">
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-8 z-40 text-white text-4xl md:text-6xl bg-black/20 hover:bg-black/40 rounded-full px-3 py-2 transition"
                aria-label="Previous image"
              >
                &#10094;
              </button>

              <img
                src={selectedImage}
                alt={`Campus Image ${currentImageIndex + 1}`}
                className={`max-w-[95vw] md:max-w-[85vw] max-h-[70vh] md:max-h-[75vh] object-contain rounded-xl shadow-2xl transition-all duration-300 ease-in-out ${
                  isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              />

              <button
                onClick={nextImage}
                className="absolute right-2 md:right-8 z-40 text-white text-4xl md:text-6xl bg-black/20 hover:bg-black/40 rounded-full px-3 py-2 transition"
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>

            <div className="text-white text-sm md:text-base mb-3">
              {currentImageIndex + 1} / {campusImages.length}
            </div>

            <div className="w-full max-w-6xl overflow-x-auto scrollbar-hide pb-4 px-2">
              <div className="flex gap-2 md:gap-3 justify-start min-w-max">
                {campusImages.map((imageUrl, index) => (
                  <button
                    key={index}
                    ref={(el) => (thumbnailRefs.current[index] = el)}
                    onClick={() => changeImage(index)}
                    className={`shrink-0 rounded-md overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                      currentImageIndex === index
                        ? "border-yellow-400 scale-105"
                        : "border-white/40 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imageUrl}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-16 h-12 md:w-24 md:h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Modal>

        {/* VIDEO MODAL */}
        <Modal
          isOpen={!!selectedVideo}
          onRequestClose={closeVideoModal}
          contentLabel="Video Player"
          className="outline-none"
          overlayClassName="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center"
        >
          <div className="relative">
            <iframe
              src={selectedVideo}
              title="Campus Video"
              className="lg:w-[1000px] lg:h-[600px] w-[400px] h-[300px] rounded-xl"
              allowFullScreen
            ></iframe>

            <Cancel
              onClick={closeVideoModal}
              className="absolute top-4 right-4 cursor-pointer text-white bg-gray-700 bg-opacity-75 rounded-full p-1"
              style={{ fontSize: "2rem" }}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Campus;