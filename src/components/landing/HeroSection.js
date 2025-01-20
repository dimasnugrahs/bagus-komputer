import React from "react";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/office-concept-illustration_114360-1406.jpg?t=st=1736912293~exp=1736915893~hmac=fb40cc3d696178fa9324960d869e7fcba2d7f88c28fa2ebf95ca24c96ea54e5c&w=740",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <div className="lg:px-32">
      <div className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out `}
          >
            <div className="items-center grid grid-cols-1 lg:grid-cols-2 place-items-center px-6 md:px-0  h-full ">
              <div className="max-w-xl lg:max-w-4xl text-center lg:text-left">
                <h2 className=" text-4xl lg:text-5xl font-semibold mb-4 text-brand-black">
                  {slide.title}
                </h2>
                <p className="text-sm font-light italic text-brand-primary">
                  {slide.description}
                </p>
              </div>
              <div className="flex justify-center">
                <div
                  className="w-[300px] h-[400px] px-12"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: "center", // Memusatkan gambar
                    backgroundSize: "contain", // Pastikan gambar tidak terpotong
                    backgroundRepeat: "no-repeat", // Hindari pengulangan gambar
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
