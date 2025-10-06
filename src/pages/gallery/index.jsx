import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";

const GalleryPage = () => {
  const [images] = useState([
    { id: 1, src: "/assets/Gallery/_DSC0030.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/assets/Gallery/_DSC2049.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/assets/Gallery/_DSC2935.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/assets/Gallery/_DSC3037.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/assets/Gallery/_DSC3097.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/assets/Gallery/_DSC3967.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/assets/Gallery/_DSC4764.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/assets/Gallery/_DSC5255.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "/assets/Gallery/_DSC5265.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "/assets/Gallery/_DSC5310.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "/assets/Gallery/_DSC5450.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "/assets/Gallery/_DSC5737.jpg", alt: "Gallery Image 12" },
    { id: 13, src: "/assets/Gallery/_DSC6197.jpg", alt: "Gallery Image 13" },
    { id: 14, src: "/assets/Gallery/_DSC6363.jpg", alt: "Gallery Image 14" },
    { id: 15, src: "/assets/Gallery/_DSC6414.jpg", alt: "Gallery Image 15" },
    { id: 16, src: "/assets/Gallery/_DSC6422.jpg", alt: "Gallery Image 16" },
    { id: 17, src: "/assets/Gallery/_DSC6607.jpg", alt: "Gallery Image 17" },
    { id: 18, src: "/assets/Gallery/_DSC6625.jpg", alt: "Gallery Image 18" },
    { id: 19, src: "/assets/Gallery/_DSC6901.jpg", alt: "Gallery Image 19" },
    { id: 20, src: "/assets/Gallery/_DSC7356 - Copy.jpg", alt: "Gallery Image 20" },
    { id: 21, src: "/assets/Gallery/_DSC8015.jpg", alt: "Gallery Image 21" },
    { id: 22, src: "/assets/Gallery/_DSC8082.jpg", alt: "Gallery Image 22" },
    { id: 23, src: "/assets/Gallery/_DSC8178.jpg", alt: "Gallery Image 23" },
    { id: 24, src: "/assets/Gallery/_DSC9325.jpg", alt: "Gallery Image 24" },
    { id: 25, src: "/assets/Gallery/_DSC9399.jpg", alt: "Gallery Image 25" },
    { id: 26, src: "/assets/Gallery/_DSC9556.jpg", alt: "Gallery Image 26" },
    { id: 27, src: "/assets/Gallery/_DSC9629.jpg", alt: "Gallery Image 27" },
    { id: 28, src: "/assets/Gallery/_DSC9815.jpg", alt: "Gallery Image 28" },
    { id: 29, src: "/assets/Gallery/_DSC9909.jpg", alt: "Gallery Image 29" },
    { id: 30, src: "/assets/Gallery/_DSC9961.jpg", alt: "Gallery Image 30" },
    { id: 31, src: "/assets/Gallery/20220628_080706.jpg", alt: "Gallery Image 31" },
    { id: 32, src: "/assets/Gallery/20220629_171758.jpg", alt: "Gallery Image 32" },
    { id: 33, src: "/assets/Gallery/20250426_125241.jpg", alt: "Gallery Image 33" },
    { id: 34, src: "/assets/Gallery/20250428_123409.jpg", alt: "Gallery Image 34" },
    { id: 35, src: "/assets/Gallery/Children 2.jpg", alt: "Gallery Image 35" },
    { id: 36, src: "/assets/Gallery/Children 4.jpg", alt: "Gallery Image 36" },
    { id: 37, src: "/assets/Gallery/Children 5.jpg", alt: "Gallery Image 37" },
    { id: 38, src: "/assets/Gallery/Children grp photo].jpg", alt: "Gallery Image 38" },
    { id: 39, src: "/assets/Gallery/Children grp photo2.jpg", alt: "Gallery Image 39" },
    { id: 40, src: "/assets/Gallery/DJI_0212.jpg", alt: "Gallery Image 40" },
    { id: 41, src: "/assets/Gallery/Dress Giving.jpg", alt: "Gallery Image 41" },
    { id: 42, src: "/assets/Gallery/DSC02543.jpg", alt: "Gallery Image 42" },
    { id: 43, src: "/assets/Gallery/DSC09425.jpg", alt: "Gallery Image 43" },
    { id: 44, src: "/assets/Gallery/DSCF9665.jpg", alt: "Gallery Image 44" },
    { id: 45, src: "/assets/Gallery/Ela school 10.09.25.jpg", alt: "Gallery Image 45" },
    { id: 46, src: "/assets/Gallery/feeding during flood.jpg", alt: "Gallery Image 46" },
    { id: 47, src: "/assets/Gallery/FP 1.jpg", alt: "Gallery Image 47" },
    { id: 48, src: "/assets/Gallery/Girl grp photo.jpg", alt: "Gallery Image 48" },
    { id: 49, src: "/assets/Gallery/Graduation.jpg", alt: "Gallery Image 49" },
    { id: 50, src: "/assets/Gallery/Grp photo 2.jpg", alt: "Gallery Image 50" },
    { id: 51, src: "/assets/Gallery/IGM team distribiuting food-2023.jpg", alt: "Gallery Image 51" },
    { id: 52, src: "/assets/Gallery/IGM01177.jpg", alt: "Gallery Image 52" },
    { id: 53, src: "/assets/Gallery/IMG_0392.jpg", alt: "Gallery Image 53" },
    { id: 54, src: "/assets/Gallery/IMG_1916.jpg", alt: "Gallery Image 54" },
    { id: 55, src: "/assets/Gallery/IMG_6686.jpg", alt: "Gallery Image 55" },
    { id: 56, src: "/assets/Gallery/IMG_7477.jpg", alt: "Gallery Image 56" },
    { id: 57, src: "/assets/Gallery/IMG_20240315_081648.jpg", alt: "Gallery Image 57" },
    { id: 58, src: "/assets/Gallery/IMG-20250911-WA0057.jpg", alt: "Gallery Image 58" },
    { id: 59, src: "/assets/Gallery/Inde.jpg", alt: "Gallery Image 59" },
    { id: 60, src: "/assets/Gallery/Jute.jpg", alt: "Gallery Image 60" },
    { id: 61, src: "/assets/Gallery/LP1.jpg", alt: "Gallery Image 61" },
    { id: 62, src: "/assets/Gallery/LP2.jpg", alt: "Gallery Image 62" },
    { id: 63, src: "/assets/Gallery/medical camp FEb 2024.jpg", alt: "Gallery Image 63" },
    { id: 64, src: "/assets/Gallery/Privaram Medical camp.jpg", alt: "Gallery Image 64" },
    { id: 65, src: "/assets/Gallery/sir.jpg", alt: "Gallery Image 65" },
    { id: 66, src: "/assets/Gallery/Staff GRP photo.jpg", alt: "Gallery Image 66" },
    { id: 67, src: "/assets/Gallery/WhatsApp Image 2025-05-12 at 12.40.57_ca0f5aa6.jpg", alt: "Gallery Image 67" },
  ]);

   const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Block scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div id="gallery" className="min-h-screen bg-background ">
      <Header />
      <main className=" px-4 py-20 lg:py-32 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl leading-relaxed text-center mb-12 text-foreground">
            Gallery
          </h2>

          {/* Masonry layout */}
          <div
            className="
              columns-1
              sm:columns-2
              md:columns-3
              lg:columns-4
              gap-4
              [column-fill:_balance]
            "
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="mb-4 break-inside-avoid cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-xl shadow-md hover:opacity-90 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay background */}
            <div
              className="absolute inset-0 bg-black bg-opacity-80"
              onClick={(e) => e.stopPropagation()} // block background clicks
            ></div>

            {/* Modal content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
              />

              {/* Navigation & close buttons outside image */}
              <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12">
                <button
                  className="text-white text-3xl font-bold"
                  onClick={prevImage}
                >
                  &#10094;
                </button>
                <button
                  className="text-white text-3xl font-bold"
                  onClick={nextImage}
                >
                  &#10095;
                </button>
              </div>

              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GalleryPage;