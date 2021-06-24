<template>
  <div class="bg-hero-1 bg-no-repeat bg-cover rounded bg-graphite-gray slide">
    <main class="mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 md:grid-rows-1 gap-4">
        <div class="col-span-2">
          <div class="sm:text-center lg:text-left min-h-full">
            <img src="@/assets/img/logos/logo_green.svg" class="pt-5"/>
            <h1 class="text-4xl pt-10 text-white tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Browser. Rendering. Performance.</span>
            </h1>
          </div>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-graphite-gray bg-toxic-green md:py-4 md:text-lg md:px-10">
                Register
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-graphite-gray bg-white md:py-4 md:text-lg md:px-10">
                Details
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="flex items-center mt-20">
              <img class="w-48 h-48 border-8 rounded-full mr-4" src="/avatars/ufocoder.jpg" alt="Avatar of Writer">
              <div>
                <p class="text-toxic-green text-2xl">Sergey Ufocoder</p>
                <p class="text-white">Software Engineer, System Architect, Node.js Tech Speaker</p>
              </div>
            </div>
          </div>
          <div class="text-left mt-20 mb-10 text-white text-xl">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-toxic-green inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                20 July 2021, 18:00 GMT+3
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-toxic-green inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Online
              </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.slide {
  min-height: 630px;
}
</style>
