import React from "react";

const HeroSection = () => {
  return (
    <div className="lg:py-32 px-6 lg:px-32 py-16">
      <div class="text-center mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          We are a passionate team dedicated to delivering the best solutions
          for our clients. Our mission is to provide exceptional services that
          empower businesses to succeed in the digital era.
        </p>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="shadow-lg rounded-lg p-6 text-center bg-black/30"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            className="w-24 h-24 mx-auto mb-4"
          >
            <path
              fill="#ffffff"
              d="M17 4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414 0L10 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13.5 9.086L18.586 4zM5 18v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0m5-4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm4 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m6-4a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"
            />
          </svg>
          <h3 class="text-lg font-semibold text-brand-white mb-2">
            Our Mission
          </h3>
          <p class="text-brand-white text-sm">
            To inspire innovation and deliver quality solutions tailored to our
            clients' needs.
          </p>
        </div>

        <div
          className="shadow-lg rounded-lg p-6 text-center bg-black/30"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            className="w-24 h-24 mx-auto mb-4"
          >
            <path
              fill="#ffffff"
              d="M17 4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414 0L10 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13.5 9.086L18.586 4zM5 18v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0m5-4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm4 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m6-4a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"
            />
          </svg>
          <h3 class="text-lg font-semibold text-brand-white mb-2">
            Our Vision
          </h3>
          <p class="text-brand-white text-sm">
            To become a global leader in the digital solutions industry, setting
            new standards of excellence.
          </p>
        </div>

        <div
          className="shadow-lg rounded-lg p-6 text-center bg-black/30"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            className="w-24 h-24 mx-auto mb-4"
          >
            <path
              fill="#ffffff"
              d="M17 4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414 0L10 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13.5 9.086L18.586 4zM5 18v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0m5-4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm4 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m6-4a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"
            />
          </svg>
          <h3 class="text-lg font-semibold text-brand-white mb-2">
            Our Values
          </h3>
          <p class="text-brand-white text-sm">
            Integrity, innovation, and customer satisfaction are at the core of
            everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
