import React from "react";

const TeamSection = () => {
  return (
    <div class="px-6 lg:px-32 py-16 bg-brand-primary text-center">
      <h2 class="text-2xl font-bold text-brand-white mb-4">Meet Our Team</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member"
            class="w-full h-auto mx-auto rounded-sm mb-4"
          />
          <h3 class="text-lg font-bold text-gray-800 mb-2">John Doe</h3>
          <p class="text-gray-600">CO-FOUNDER</p>
          <p className="text-justify text-sm mt-6">
            Terkadang, kita merasa lelah dan kehilangan arah, merasa seperti
            segala usaha yang kita lakukan tidak menghasilkan apa-apa.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member"
            class="w-full h-auto mx-auto rounded-sm mb-4"
          />
          <h3 class="text-lg font-bold text-gray-800 mb-2">Jane Smith</h3>
          <p class="text-gray-600">CO-FOUNDER</p>
          <p className="text-justify text-sm mt-6">
            Terkadang, kita merasa lelah dan kehilangan arah, merasa seperti
            segala usaha yang kita lakukan tidak menghasilkan apa-apa.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member"
            class="w-full h-auto mx-auto rounded-sm mb-4"
          />
          <h3 class="text-lg font-bold text-gray-800 mb-2">Alice Johnson</h3>
          <p class="text-gray-600">CO-FOUNDER</p>
          <p className="text-justify text-sm mt-6">
            Terkadang, kita merasa lelah dan kehilangan arah, merasa seperti
            segala usaha yang kita lakukan tidak menghasilkan apa-apa.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member"
            class="w-full h-auto mx-auto rounded-sm mb-4"
          />
          <h3 class="text-lg font-bold text-gray-800">Bob Brown</h3>
          <p class="text-gray-600">CO-FOUNDER</p>
          <p className="text-justify text-sm mt-6">
            Terkadang, kita merasa lelah dan kehilangan arah, merasa seperti
            segala usaha yang kita lakukan tidak menghasilkan apa-apa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
