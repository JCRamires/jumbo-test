<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types"
import type { ApiResponse } from "~/types/stores";
import SearchForm from '~/components/SearchForm.vue';

const query = useRoute().query

const ENTER_KEY = "Enter"
const SPACE_KEY = " "

const page = ref(parseInt(query.p as string) || 1)
const searchTerm = ref(query.q || "")

// TODO: How to handle this is null?
const { data } = await useFetch<ApiResponse>('/api/stores', { query: { p: page, q: searchTerm } })

async function handleClick(storeId: string) {
  await navigateTo(`/store/${storeId}`)
}

async function handleFormSubmit(event: FormSubmitEvent<{ inputSearchValue: string }>) {
  page.value = 1
  searchTerm.value = event.data.inputSearchValue
}

async function handleKeydown(event: KeyboardEvent, storeId: string) {
  if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
    await navigateTo(`/store/${storeId}`)
  }
}

definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <main>
    <h1 class="font-bold text-4xl mb-4">Jumbo stores</h1>

    <SearchForm :handleFormSubmit="handleFormSubmit" />

    <section v-if="data?.stores.length > 0">
      <div class="grid md:grid-cols-[repeat(auto-fit,_minmax(25vw,_1fr))] gap-2 mb-6">
        <StoreListItem v-for="store in data?.stores" :store="store" :handleKeydown="handleKeydown"
          :handleClick="handleClick" />
      </div>

      <UPagination v-model="page" :page-count="20" :total="data?.totalCount" />
    </section>

    <section v-else>
      No stores to show
    </section>
  </main>
</template>
