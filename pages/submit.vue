<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod';
import PageTitle from "~/components/moleculas/PageTitle.vue";

const languages = [
  { label: 'English', value: 'english' },
  { label: 'Ukrainian', value: 'ukrainian' },
  { label: 'Russian', value: 'russian' }
]

const state = reactive({
  title: undefined,
  description: undefined,
  language: undefined,
  author: {
    name: undefined,
    title: undefined,
    about: undefined,
    email: undefined,
    photo: undefined,
    links: undefined
  }
})

const schema = z.object({
  title: z.string().min(10),
  description: z.string().min(10),
  language: z.string().min(1).refine((value: string) => languages.some(language => language.value === value), {
    message: 'Select a language'
  }),
  author: {
    name: z.string().min(2),
    title: z.string(),
    about: z.string().min(10),
    email: z.string().email(),
    photo: z.string().url(),
    links: z.array(z.string().url())
  }
})

type Schema = z.infer<typeof schema>

const form = ref()

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
  alert(event.data)
}
</script>

<template>
  <PageTitle heading="Submit a topic"  description="Fill the form and submit the topic. We will contact with you."/>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4 border-gray-200 dark:border-gray-700 border-t-1 pt-5" @submit="onSubmit">

    <UFormGroup size="xl" name="title" label="Title">
      <UInput v-model="state.title" />
    </UFormGroup>

    <UFormGroup size="xl" name="description" label="Description">
      <UTextarea v-model="state.description" />
    </UFormGroup>

    <UFormGroup size="xl" name="language" label="Language">
      <USelect v-model="state.language" :options="languages" />
    </UFormGroup>

    <UFormGroup size="xl" name="author.name" label="Author's Name">
      <UInput v-model="state.author.name" />
    </UFormGroup>

    <UFormGroup size="xl" name="author.email" label="Author's Email">
      <UInput v-model="state.author.email" />
    </UFormGroup>

    <UFormGroup size="xl" name="author.about" label="About the author">
      <UTextarea v-model="state.author.about" />
    </UFormGroup>

    <UButton size="xl" variant="outline" type="submit">
      Submit
    </UButton>

    <UButton size="xl" variant="outline" class="ml-2" @click="form.clear()">
      Clear
    </UButton>
  </UForm>
</template>
