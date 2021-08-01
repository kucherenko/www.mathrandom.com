<template>
  <header class="flex items-center h-16">
    <div class="sm:w-48">
      <a href="/" title="home">
        <img
          src="@/assets/img/logos/logo-min.svg"
          alt="logo"
          height="40"
          width="172"
        />
      </a>
    </div>

    <div
      class="
        flex flex-column
        items-center
        flex-grow
        justify-center
        text-2xl
        font-medium
        leading-5
        text-white text-center
      "
    >
      <div class="hidden sm:block">Let's talk tech!</div>
    </div>

    <div class="sm:w-48 flex flex-wrap gap-6 justify-end whitespace-no-wrap">
      <a
        href="https://t.me/mathrandomcommunity"
        class="rounded-md p-1 hover:bg-gray-700"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Telegram group"
          src="@/assets/img/icons/telegram.svg"
          class="w-12 h-12"
        />
      </a>

      <a
        href="https://www.youtube.com/c/Mathrandomjavascriptcommunity"
        class="rounded-md p-1 hover:bg-gray-700"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Youtube channel"
          src="@/assets/img/icons/youtube.svg"
          class="w-12 h-12"
        />
      </a>
    </div>
  </header>
</template>
