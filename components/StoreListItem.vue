<script setup lang="ts">
import type { Store } from '~/types/stores';

interface Props {
  store: Store
  handleClick: (storeId: string) => {}
  handleKeydown: (event: KeyboardEvent, storeId: string) => {}
}

const { store, handleClick, handleKeydown } = defineProps<Props>()
</script>

<template>
  <div tabindex="0" class="border rounded shadow p-4 h-full cursor-pointer" @click="() => handleClick(store.storeId)"
    @keydown="event => handleKeydown(event, store.storeId)" role="link">
    <div class="font-semibold mb-2">{{ store.name }}</div>
    <div class="flex gap-1 items-center">
      <UIcon name="i-heroicons-map-pin" />
      <div>{{ store.location.address.street }}, {{ store.location.address.houseNumber }}</div>
    </div>
    <div class="flex gap-1 items-center">
      <UIcon name="i-heroicons-building-office" />
      <div class="capitalize">{{ store.location.address.city.toLowerCase() }}</div>
    </div>
    <StoreStatus :store="store" />
  </div>
</template>