import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="lg:px-32 py-16 bg-brand-primary">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="font-manrope font-bold text-4xl text-brand-white mb-8 max-xl:text-center">
            Portfolio / Projects
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <a
              href="javascript:;"
              class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                class="rounded-2xl object-cover"
                src="https://cdn.dribbble.com/userupload/12351541/file/original-183aca87815408bec3b4ad0de5801a9f.png?resize=640x800&vertical=center"
                alt="Jacket image"
              />
              <div class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div class="flex items-center justify-between mb-2">
                  <h6 class="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                </div>
                <p class="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </a>
            <a
              href="javascript:;"
              class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
            >
              <img
                class="rounded-2xl object-cover"
                src="https://cdn.dribbble.com/userupload/12351541/file/original-183aca87815408bec3b4ad0de5801a9f.png?resize=640x800&vertical=center"
                alt="Blazer image"
              />
              <div class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div class="flex items-center justify-between mb-2">
                  <h6 class="font-semibold text-base leading-7 text-black ">
                    Black Blazer
                  </h6>
                </div>
                <p class="text-xs leading-5 text-gray-500">Men’s Suits</p>
              </div>
            </a>
            <a
              href="javascript:;"
              class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                class="rounded-2xl object-cover"
                src="https://cdn.dribbble.com/userupload/12351541/file/original-183aca87815408bec3b4ad0de5801a9f.png?resize=640x800&vertical=center"
                alt="printed top image"
              />
              <div class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div class="flex items-center justify-between mb-2">
                  <h6 class="font-semibold text-base leading-7 text-black ">
                    Red Flowers
                  </h6>
                </div>
                <p class="text-xs leading-5 text-gray-500">Womenswear</p>
              </div>
            </a>

            <a
              href="javascript:;"
              class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
            >
              <img
                class="rounded-2xl object-cover"
                src="https://cdn.dribbble.com/userupload/10801407/file/original-7f3ad4c31a2cf0c9ad5fe2112c3abeb8.png?resize=752x&vertical=center"
                alt="Denim jacket image"
              />
              <div class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div class="flex items-center justify-between mb-2">
                  <h6 class="font-semibold text-base leading-7 text-black ">
                    Denim Jacket
                  </h6>
                </div>
                <p class="text-xs leading-5 text-gray-500">Children Wear</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
