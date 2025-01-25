import React from "react";

const CompanyBrand = () => {
  return (
    <div className="px-6 lg:px-32 bg-brand-primary">
      <div className="gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16">
        <div className="font-light  sm:text-lg text-gray-400 ">
          <h2 className=" mb-4 text-4xl tracking-tight font-bold text-brand-white">
            Fleksibilitas, Inovasi dan kepercayaan
          </h2>
          <p className=" mb-4 text-brand-white mt-4 leading-relaxed text-justify lg:text-left">
            Bagus Komputer, mitra terpercaya Anda dalam solusi teknologi
            digital. Kami adalah perusahaan yang berdedikasi untuk membantu
            bisnis dan individu mencapai potensi penuh mereka melalui layanan
            yang inovatif, berkualitas, dan terjangkau.
          </p>
          <p className="text-brand-white mt-4 leading-relaxed text-justify lg:text-left">
            Didirikan dengan semangat untuk membawa transformasi digital ke
            berbagai sektor industri, Bagus Komputer memiliki tim profesional
            yang berpengalaman dalam bidang Pembuatan Website, Digital
            Marketing, Perangkat Keras & Perangkat Lunak Komputer dan Instalasi
            Jaringan
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          ></img>
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CompanyBrand;
