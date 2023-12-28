<template>
  <div class="flex items-center justify-center pt-4">
    <div>
      <div class="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Subscribe to the newsletter</div>
      <form class="flex flex-col sm:flex-row">
        <div>
          <label for="email-input"><span class="sr-only">Email address</span>
            <input autocomplete="email"
                   class="focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black"
                   id="email-input"
                   placeholder="Enter your email"
                   required
                   type="email"
                   name="email">
          </label>
        </div>
        <div class="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            class="bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"
            type="submit">Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
