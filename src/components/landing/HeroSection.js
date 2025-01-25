import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/office-concept-illustration_114360-1406.jpg?t=st=1736912293~exp=1736915893~hmac=fb40cc3d696178fa9324960d869e7fcba2d7f88c28fa2ebf95ca24c96ea54e5c&w=740",
      title: "Membangun Bisnis Anda Menuju Premium Bisnis.",
      description:
        "Hadir untuk memberikan solusi terbaik dalam pembuatan website, strategi pemasaran digital, servis perangkat keras dan lunak, serta instalasi jaringan. Percayakan kebutuhan teknologi Anda kepada kami.",
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
            <div className="items-center place-items-center grid grid-cols-1 lg:grid-cols-2  px-6 md:px-0  h-full ">
              <div className="max-w-xl lg:max-w-4xl text-center lg:text-left mt-32 lg:mt-0">
                <h2 className="text-2xl lg:text-5xl font-semibold mb-4 text-brand-black">
                  {slide.title}
                </h2>
                <p className="text-sm font-light italic text-brand-primary">
                  {slide.description}
                </p>
                <div className="flex justify-center lg:justify-start gap-3 mt-3">
                  <Link to="/services">
                    <button className="px-6 py-2 border-2 border-brand-green text-brand-black text-sm rounded-lg hover:bg-brand-green hover:text-brand-white focus:outline-none focus:ring focus:ring-green-300">
                      Jelajahi Layanan
                    </button>
                  </Link>
                  <Link to="https://wa.me/6282146485018?text=Halo%20Bagus%20Komputer,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20Anda.">
                    <button className="px-6 py-2 text-brand-black text-sm border-2 border-brand-secondary bg-brand-secondary rounded-lg hover:bg-brand-green hover:text-brand-white focus:outline-none focus:ring focus:ring-green-300">
                      Hubungi Sekarang
                    </button>
                  </Link>
                </div>
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
