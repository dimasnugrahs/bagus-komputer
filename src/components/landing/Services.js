import React from "react";

const features = [
  {
    title: "Pengembangan Website",
    description:
      "Bangun kehadiran online profesional dengan website modern dan fungsional.",
    icon: "https://www.svgrepo.com/show/474451/rocket-2.svg", // Ganti dengan icon SVG atau gambar sesuai kebutuhan
  },
  {
    title: "Digital Marketing",
    description:
      "Tingkatkan jangkauan bisnis Anda dengan strategi pemasaran digital yang tepat sasaran.",
    icon: "https://www.svgrepo.com/show/444194/brand-google-cloud.svg",
  },
  {
    title: "Perangkat Keras & Perangkat Lunak Komputer",
    description:
      "Layanan perbaikan dan perawatan perangkat komputer untuk menjaga performa optimal.",
    icon: "https://www.svgrepo.com/show/451874/software-update-urgent.svg",
  },
  {
    title: "Instalasi Jaringan",
    description:
      "Koneksi internet cepat dan stabil dengan layanan instalasi jaringan profesional.",
    icon: "https://www.svgrepo.com/show/196138/networking.svg",
  },
];

const Services = () => {
  return (
    // <div className="lg:px-32 lg:py-14">
    //   <div className="mx-auto">
    //     <p className="text-center lg:mb-1">Lorem Ipsum.</p>
    //     <h2 className="text-center font-semibold lg:mb-8">
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry
    //     </h2>
    //     <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 text-center ">
    //       <li className="rounded-xl py-6 px-6 shadow-sm hover:shadow-lg bg-gray-800 text-white">
    //         <div className="flex items-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="44px"
    //             height="44px"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z"
    //             />
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M4.5 5.5L8 7l3.5-1.5M8 7v4"
    //             />
    //           </svg>
    //           <h3 className="mx-4 font-display font-medium">
    //             Lorem Ipsum is simply dummy.
    //           </h3>
    //         </div>
    //         <p className="mb-4 mt-4 text-sm leading-6 text-secondary-500 italic">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry
    //         </p>
    //         <p className="hidden lg:block mt-1.5 text-sm leading-6 text-secondary-500 text-justify px-4">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book. It has
    //           survived not only five centuries, but also the leap into
    //           electronic typesetting
    //         </p>
    //       </li>
    //       <li className="rounded-xl py-6 px-6 shadow-sm hover:shadow-lg bg-gray-800 text-white">
    //         <div className="flex items-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="44px"
    //             height="44px"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z"
    //             />
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M4.5 5.5L8 7l3.5-1.5M8 7v4"
    //             />
    //           </svg>
    //           <h3 className="mx-4 font-display font-medium">
    //             Lorem Ipsum is simply dummy.
    //           </h3>
    //         </div>
    //         <p className="mb-4 mt-4 text-sm leading-6 text-secondary-500 italic">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry
    //         </p>
    //         <p className="hidden lg:block mt-1.5 text-sm leading-6 text-secondary-500 text-justify px-4">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book. It has
    //           survived not only five centuries, but also the leap into
    //           electronic typesetting
    //         </p>
    //       </li>
    //       <li className="rounded-xl py-6 px-6 shadow-sm hover:shadow-lg bg-gray-800 text-white">
    //         <div className="flex items-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="44px"
    //             height="44px"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z"
    //             />
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M4.5 5.5L8 7l3.5-1.5M8 7v4"
    //             />
    //           </svg>
    //           <h3 className="mx-4 font-display font-medium">
    //             Lorem Ipsum is simply dummy.
    //           </h3>
    //         </div>
    //         <p className="mb-4 mt-4 text-sm leading-6 text-secondary-500 italic">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry
    //         </p>
    //         <p className="hidden lg:block mt-1.5 text-sm leading-6 text-secondary-500 text-justify px-4">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book. It has
    //           survived not only five centuries, but also the leap into
    //           electronic typesetting
    //         </p>
    //       </li>
    //       <li className="rounded-xl py-6 px-6 shadow-sm hover:shadow-lg bg-gray-800 text-white">
    //         <div className="flex items-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="44px"
    //             height="44px"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z"
    //             />
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M4.5 5.5L8 7l3.5-1.5M8 7v4"
    //             />
    //           </svg>
    //           <h3 className="mx-4 font-display font-medium">
    //             Lorem Ipsum is simply dummy.
    //           </h3>
    //         </div>
    //         <p className="mb-4 mt-4 text-sm leading-6 text-secondary-500 italic">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry
    //         </p>
    //         <p className="hidden lg:block mt-1.5 text-sm leading-6 text-secondary-500 text-justify px-4">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book. It has
    //           survived not only five centuries, but also the leap into
    //           electronic typesetting
    //         </p>
    //       </li>
    //       <li className="rounded-xl py-6 px-6 shadow-sm hover:shadow-lg bg-gray-800 text-white">
    //         <div className="flex items-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="44px"
    //             height="44px"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z"
    //             />
    //             <path
    //               fill="none"
    //               stroke="#5a6ceb"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M4.5 5.5L8 7l3.5-1.5M8 7v4"
    //             />
    //           </svg>
    //           <h3 className="mx-4 font-display font-medium">
    //             Lorem Ipsum is simply dummy.
    //           </h3>
    //         </div>
    //         <p className="mb-4 mt-4 text-sm leading-6 text-secondary-500 italic">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry
    //         </p>
    //         <p className="hidden lg:block mt-1.5 text-sm leading-6 text-secondary-500 text-justify px-4">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book. It has
    //           survived not only five centuries, but also the leap into
    //           electronic typesetting
    //         </p>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="lg:px-32 lg:py-14">
      <div className="text-brand-primary py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Here to help you pick the right colours for your next project
          </h2>
          <p className="mt-4 text-lg text-brand-black">
            Apa yang Bisa Kami Lakukan untuk Anda?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand-white text-green-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="bg-green-300 text-green-900 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
                <img src={feature.icon} alt="" className="mx-auto h-8 w-8" />
              </div>
              <h3 className="text-md font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
