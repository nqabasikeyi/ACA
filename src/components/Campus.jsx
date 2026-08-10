import { Cancel } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

import africaDay1 from "../assets/africa-day/africa-day-1.jpg";
import africaDay2 from "../assets/africa-day/africa-day-2.jpg";
import africaDay3 from "../assets/africa-day/africa-day-3.jpg";
import africaDay4 from "../assets/africa-day/africa-day-4.jpg";

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
  campus1,
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

    // =========================================================
    // GENERAL CAMPUS IMAGES
    // Add their correct years later if you know them
    // =========================================================

    {
      image: coverpage,
      title: "Amazon Christian Academy",
      description:
        "A glimpse into life and learning at Amazon Christian Academy.",
    },

    {
      image: showcase,
      title: "Chemistry Students",
      description:
        "Chemistry learners engaging in practical and classroom-based learning at Amazon Christian Academy.",
    },

    {
      image: showcase1,
      title: "O-Level Geography Students",
      description:
        "O-Level Geography learners recording and analysing weather conditions at Amazon Christian Academy.",
    },

    {
      image: showcase2,
      title: "Girls' Prefects",
      description:
        "Our girls' prefects demonstrating leadership, integrity, and responsibility at Amazon Christian Academy.",
    },

    {
      image: showcase3,
      title: "Boys' Prefects",
      description:
        "Our boys' prefects demonstrating leadership, integrity, and responsibility at Amazon Christian Academy.",
    },

    {
      image: showcase7,
      title: "O-Level Physical Education Class",
      description:
        "O-Level Physical Education learners participating in a supervised gym session focused on fitness and well-being.",
    },

    {
      image: showcase8,
      title: "School Bus",
      description:
        "The Amazon Christian Academy school bus, supporting safe and reliable transport for our learners.",
    },

    {
      image: showcase10,
      title: "School Gymnasium",
      description:
        "Our school gymnasium provides learners with a dedicated space for physical fitness, training, and well-being.",
    },

    {
      image: showcase13,
      title: "Amazon Christian Academy Billboard",
      description:
        "Welcoming learners, parents, visitors, and members of the community to Amazon Christian Academy.",
    },

    {
      image: showcase16,
      title: "ACA School Pastors",
      description:
        "Our school pastors providing spiritual guidance and helping nurture faith, character, and values among our learners.",
    },
    
    // =========================================================
    // 2026
    // =========================================================

    {
      image: africaDay1,
      title: "Africa Day 2026",
      description:
        "Celebrating African culture, heritage, and unity at Amazon Christian Academy.",
    },

    {
      image: africaDay2,
      title: "Africa Day 2026",
      description:
        "Learners celebrating Africa Day through cultural displays and traditional attire.",
    },

    {
      image: africaDay3,
      title: "Africa Day 2026",
      description:
        "A colourful celebration of African identity, culture, heritage, and community.",
    },

    {
      image: africaDay4,
      title: "Africa Day 2026",
      description:
        "Highlights from our 2026 Africa Day celebrations at Amazon Christian Academy.",
    },

    // =========================================================
    // 2025
    // =========================================================

    {
      image: arts1,
      title: "Culture Day 2025",
      description:
        "Celebrating culture, creativity, and heritage through our learners.",
    },

    {
      image: showcase4,
      title: "2025 Mid-Year Examinations",
      description:
        "ZJC Class of 2025 learners sitting for their mid-year examinations.",
    },

    {
      image: showcase6,
      title: "POTRAZ 2025 Letter Writing Award",
      description:
        "Hilary Mpofu receiving the POTRAZ 2025 Letter Writing Award in recognition of her outstanding achievement.",
    },

    {
      image: showcase9,
      title: "2025 O-Level Combined Science Class",
      description:
        "Our 2025 O-Level Combined Science learners conducting a practical experiment.",
    },

    {
      image: showcase11,
      title: "2025 Prefects Board",
      description:
        "The 2025 Prefects Board, demonstrating leadership, responsibility, and service to the school community.",
    },

    {
      image: showcase12,
      title: "2025 Teachers' Uniform Day",
      description:
        "Teachers at Amazon Christian Academy participating in the 2025 Uniform Day celebrations.",
    },

    {
      image: showcase14,
      title: "2025 Unveiling of the Computer Laboratory",
      description:
        "A special moment in the school's history as trustees unveiled the new computer laboratory block.",
    },

     {
      image: campus1,
      title: "2025 HIV Prevention Awareness Day",
      description:
        "Learners and facilitators participating in HIV prevention awareness activities promoting education, health, and responsible decision-making.",
    },

    {
      image: showcase15,
      title: "2025 Prom Night",
      description:
        "Learners celebrating a memorable evening of elegance, friendship, and togetherness.",
    },

    {
      image: showcase17,
      title: "2025 Breast Cancer Awareness Day",
      description:
        "Learners participating in Breast Cancer Awareness Day activities and promoting health awareness within the school community.",
    },

    {
      image: showcase18,
      title: "2025 Africa Day Celebration",
      description:
        "Learners celebrating African culture, heritage, and unity during our 2025 Africa Day celebrations.",
    },

   

    // =========================================================
    // 2024
    // =========================================================

    {
      image: showcase5,
      title: "POTRAZ 2024 Letter Writing Award",
      description:
        "Nontobeko Khumalo receiving the POTRAZ 2024 Letter Writing Award in recognition of her outstanding achievement.",
    },

    // =========================================================
    // 2023
    // =========================================================

    {
      image: showcase19,
      title: "2023 Tree Planting Day",
      description:
        "Learners planting trees at Amazon Christian Academy as part of efforts to promote environmental stewardship and sustainability.",
    },

    {
      image: showcase20,
      title: "2023 Community Litter-Picking",
      description:
        "Learners taking part in a community litter-picking initiative to promote cleanliness and environmental responsibility.",
    },

    
  ];

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(campusImages[index].image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const changeImage = (newIndex) => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setSelectedImage(campusImages[newIndex].image);
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

  /*
    Keyboard controls:
    Left Arrow  = previous
    Right Arrow = next
    Escape      = close
  */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") {
        const newIndex = (currentImageIndex + 1) % campusImages.length;
        changeImage(newIndex);
      }

      if (e.key === "ArrowLeft") {
        const newIndex =
          (currentImageIndex - 1 + campusImages.length) % campusImages.length;

        changeImage(newIndex);
      }

      if (e.key === "Escape") {
        closeImageModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentImageIndex]);

  /*
    Close modal if user scrolls/swipes vertically.
  */
  useEffect(() => {
    if (!selectedImage) return;

    const handleScrollClose = () => {
      closeImageModal();
    };

    window.addEventListener("wheel", handleScrollClose, {
      passive: true,
    });

    window.addEventListener("touchmove", handleScrollClose, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleScrollClose);
      window.removeEventListener("touchmove", handleScrollClose);
    };
  }, [selectedImage]);

  /*
    Keep selected thumbnail visible.
  */
  useEffect(() => {
    if (!selectedImage) return;

    thumbnailRefs.current[currentImageIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentImageIndex, selectedImage]);

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CAMPUS IMAGE SHOWCASE */}
        <section className="mt-12 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-indigo-700">
            Campus Showcase
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {campusImages.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  rounded-xl
                  shadow-md
                  cursor-pointer
                  hover:shadow-xl
                  transform
                  hover:scale-105
                  transition-all
                  duration-300
                "
                onClick={() => openImageModal(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover object-center"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-all duration-300"></div>

                {/* Gallery stays simple */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-semibold opacity-100 group-hover:scale-105 transition-transform duration-300">
                    Click to enlarge
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO SHOWCASE */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-indigo-700">
            Campus Video Showcase
          </h2>

          <p>Coming Soon...</p>
        </section>
      </div>

      {/* IMAGE SLIDESHOW MODAL */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeImageModal}
        contentLabel="Campus Slideshow"
        className="outline-none w-full h-full"
        overlayClassName="
          fixed
          inset-0
          bg-black/90
          z-[9999]
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            relative
            w-full
            h-full
            flex
            flex-col
            items-center
            justify-center
            px-3
            md:px-8
          "
        >
          {/* CLOSE */}
          <button
            onClick={closeImageModal}
            className="
              absolute
              top-4
              right-4
              z-50
              text-white
              bg-white/10
              hover:bg-white/20
              backdrop-blur-md
              rounded-full
              p-2
              transition
            "
            aria-label="Close slideshow"
          >
            <Cancel style={{ fontSize: "2rem" }} />
          </button>

          {/* MAIN IMAGE */}
          <div className="relative w-full flex-1 flex items-center justify-center">
            {/* PREVIOUS */}
            <button
              onClick={prevImage}
              className="
                absolute
                left-2
                md:left-8
                z-40
                text-white
                text-4xl
                md:text-6xl
                bg-black/20
                hover:bg-black/40
                rounded-full
                px-3
                py-2
                transition
              "
              aria-label="Previous image"
            >
              &#10094;
            </button>

            <img
              src={selectedImage}
              alt={campusImages[currentImageIndex]?.title}
              className={`
                max-w-[95vw]
                md:max-w-[85vw]
                max-h-[65vh]
                md:max-h-[70vh]
                object-contain
                rounded-xl
                shadow-2xl
                transition-all
                duration-300
                ease-in-out
                ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}
              `}
            />

            {/* NEXT */}
            <button
              onClick={nextImage}
              className="
                absolute
                right-2
                md:right-8
                z-40
                text-white
                text-4xl
                md:text-6xl
                bg-black/20
                hover:bg-black/40
                rounded-full
                px-3
                py-2
                transition
              "
              aria-label="Next image"
            >
              &#10095;
            </button>
          </div>

          {/* SELECTED IMAGE INFORMATION */}
          <div className="text-center text-white mt-3 mb-4 px-4">
            <h3 className="text-lg md:text-2xl font-semibold">
              {campusImages[currentImageIndex]?.title}
            </h3>

            {campusImages[currentImageIndex]?.description && (
              <p className="text-white/65 text-xs md:text-sm mt-1 max-w-2xl">
                {campusImages[currentImageIndex].description}
              </p>
            )}

            <p className="text-white/50 text-xs md:text-sm mt-2">
              {currentImageIndex + 1} / {campusImages.length}
            </p>
          </div>

          {/* THUMBNAIL STRIP */}
          <div className="w-full max-w-6xl overflow-x-auto scrollbar-hide pb-4 px-2">
            <div className="flex gap-2 md:gap-3 justify-start min-w-max">
              {campusImages.map((item, index) => (
                <button
                  key={index}
                  ref={(el) => {
                    thumbnailRefs.current[index] = el;
                  }}
                  onClick={() => changeImage(index)}
                  aria-label={`View ${item.title}`}
                  className={`
                    shrink-0
                    rounded-md
                    overflow-hidden
                    border-2
                    transition-all
                    duration-300
                    hover:scale-110
                    ${
                      currentImageIndex === index
                        ? "border-yellow-400 scale-105"
                        : "border-white/40 opacity-70 hover:opacity-100"
                    }
                  `}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} thumbnail`}
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
        overlayClassName="
          fixed
          inset-0
          bg-black/80
          z-[9999]
          flex
          items-center
          justify-center
        "
      >
        <div className="relative">
          <iframe
            src={selectedVideo || ""}
            title="Campus Video"
            className="
              lg:w-[1000px]
              lg:h-[600px]
              w-[400px]
              h-[300px]
              rounded-xl
            "
            allowFullScreen
          ></iframe>

          <Cancel
            onClick={closeVideoModal}
            className="
              absolute
              top-4
              right-4
              cursor-pointer
              text-white
              bg-gray-700
              bg-opacity-75
              rounded-full
              p-1
            "
            style={{ fontSize: "2rem" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Campus;
