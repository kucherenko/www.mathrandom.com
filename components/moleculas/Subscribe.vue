<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
const colorMode = useColorMode()

const loading = ref(false)
const state = reactive({
  email: undefined
});
type Schema = z.output<typeof schema>

const schema = z.object({
  email: z.string().email("Invalid email")
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // TODO: Save data to database (Sendgrid, Mailchimp, etc.
  loading.value = true;
  // Do something with data
  console.log(event.data);
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
</script>

<template>
  <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup
        name="email"
        help="Subscribe to our future events and news.">
        <UButtonGroup size="xl" orientation="horizontal">
          <UInput :ui="{'bg-white': colorMode.value === 'light', 'bg-gray-900': colorMode.value !== 'light'}" v-model="state.email" />
          <UButton :loading="loading" type="submit">Subscribe</UButton>
        </UButtonGroup>
      </UFormGroup>
    </UForm>
  </div>
</template>
