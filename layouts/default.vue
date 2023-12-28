<template>
  <section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="flex h-screen flex-col justify-between font-sans">
      <Header />
      <main class="mb-auto">
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <slot />
        </div>
      </main>
      <Footer />
    </div>
  </section>
</template>
