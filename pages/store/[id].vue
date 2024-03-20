<script setup lang="ts">
import GoogleMapsIFrame from '~/components/GoogleMapsIFrame.vue';
import type { Store } from '~/types/stores';

// TODO: Handle 404
const route = useRoute()

// TODO: How to handle this null?
const { data } = await useFetch<Store>(`/api/stores/${route.params.id}`)

const status = isStoreOpen(data.value)
</script>

<template>
  <h2 class="font-bold text-4xl mb-6">Store details</h2>
  <div class="grid grid-cols-[max-content_minmax(0,_1fr)] gap-2 mb-6">
    <div class="font-bold justify-self-end">City:</div>
    <div class="capitalize">
      {{ data?.location.address.city.toLowerCase() }}
    </div>
    <div class="font-bold justify-self-end">Address:</div>
    <div>
      <div>{{ data?.location.address.street }}, {{ data?.location.address.houseNumber }}</div>
    </div>
    <div class="font-bold justify-self-end">Postal code:</div>
    <div>{{ data?.location.address.postalCode }}</div>
  </div>

  <p class="mb-3">
    Visit our <NuxtLink :href="data?.websiteURL" target="_blank" class="text-blue-600 underline">website</NuxtLink>
  </p>

  <div v-if="status.open" class="mb-3">
    <p>Store is <span class="font-bold text-green-500">OPEN</span></p>
  </div>
  <div v-else class="mb-3">
    <p>Store is <span class="font-bold text-red-500">CLOSED</span> and opens {{ status.nextOpening }}</p>
  </div>

  <h2 class="font-bold text-xl mb-3">Location</h2>
  <GoogleMapsIFrame :latitude="data?.location.latitude" :longitude="data?.location.longitude" />
</template>