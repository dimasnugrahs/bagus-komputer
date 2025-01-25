import React from "react";

const WhyUs = () => {
  return (
    <div className="px-6 lg:px-32">
      <div className="gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16">
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
        <div className="font-light  sm:text-lg text-gray-400 ">
          <h2 className=" mb-4 text-3xl tracking-tight font-extrabold text-brand-primary ">
            Kenapa harus Bagus Komputer?
          </h2>
          <p className=" mb-4 text-brand-black mt-4 leading-relaxed text-justify lg:text-left">
            Kami selalu mengikuti perkembangan teknologi terbaru untuk
            memberikan solusi terbaik. Kami percaya bahwa teknologi adalah kunci
            untuk mencapai pertumbuhan yang berkelanjutan.Kami bekerja bersama
            Anda, mendengar kebutuhan Anda, dan menciptakan solusi yang sesuai
            dengan tujuan Anda.
          </p>
          <p className=" text-brand-black mt-4 leading-relaxed text-justify lg:text-left">
            Mari tingkatkan perkembangan digital Anda, memperkuat jaringan, atau
            membutuhkan perangkat lunak dan perangkat keras berkualitas tinggi?
            Kami ada di sini untuk membantu Anda. Hubungi kami hari ini dan
            mulailah perjalanan transformasi digital Anda bersama Bagus
            Komputer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
