<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types"

interface Props {
  handleFormSubmit: (event: FormSubmitEvent<{ inputSearchValue: string }>) => void
}

const { handleFormSubmit } = defineProps<Props>();
const state = reactive({
  inputSearchValue: ''
})
</script>

<template>
  <UForm :state="state" @submit="handleFormSubmit" class="flex mb-6">
    <UInput id="store-name" v-model="state.inputSearchValue" placeholder="Find your store" class="mr-2" />
    <UButton type="submit">
      Search
    </UButton>
  </UForm>
</template>