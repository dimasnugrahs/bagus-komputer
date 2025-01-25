import React from "react";

const Testimonials = () => {
  const reviewers = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pemilik Toko Online Baju",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar yang sesuai
      title: "Layanan Profesional",
      feedback:
        "Jasa pembuatan website sangat profesional. Website saya kini terlihat modern, menarik, dan mendatangkan banyak pelanggan baru!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rina Setiawan",
      role: "Digital Marketer",
      image:
        "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar yang sesuai
      title: "Strategi Digital Marketing Hebat",
      feedback:
        "Tim mereka sangat membantu dalam menyusun strategi digital marketing yang meningkatkan omzet penjualan hingga 50%.",
      rating: 5,
    },
    {
      id: 3,
      name: "Lia Pratiwi",
      role: "Manajer Operasional",
      image:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar yang sesuai
      title: "Support Cepat & Tepat",
      feedback:
        "Support mereka sangat cepat dalam menangani masalah teknis. Sangat membantu operasional bisnis kami.",
      rating: 4,
    },
    {
      id: 4,
      name: "Hendra Kurniawan",
      role: "Pemilik Kafe",
      image:
        "https://images.unsplash.com/photo-1545596108-90be48baf3d9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar yang sesuai
      title: "Pelayanan Luar Biasa",
      feedback:
        "Layanan pembuatan website mereka luar biasa. Website kafe saya kini lebih menarik dan banyak dikunjungi pelanggan.",
      rating: 5,
    },
    {
      id: 5,
      name: "Jane D.",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1610387735653-3af3f9653838?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar yang sesuai
      title: "It's best",
      feedback:
        "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
      rating: 5,
    },
  ];
  return (
    <div className="lg:px-32 bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our clients feedback
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We provide all the advantage that can simplify all your financial and
          banking support without any further issues
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {reviewers.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center md:flex-row"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-48 h-48 rounded-sm object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-lg font-bold mb-2">{testimonial.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                      </svg>
                    )
                  )}
                </div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-blue-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
