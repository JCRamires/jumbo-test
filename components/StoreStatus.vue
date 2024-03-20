<script setup lang="ts">
import type { Store } from '~/types/stores';

const props = defineProps<{ store: Store }>()
const status = isStoreOpen(props.store)
</script>

<template>
  <p class="text-green-500 font-bold" v-if="status.open">Open</p>
  <p v-else>
    <span class="text-red-500 font-bold">Closed</span>. Opens {{ status.nextOpening }}
  </p>
</template>