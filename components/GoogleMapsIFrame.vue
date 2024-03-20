<script setup lang="ts">
interface Props {
  latitude: number;
  longitude: number;
}

const { latitude, longitude } = defineProps<Props>();
</script>

<template>
  <div class="relative h-[50vh] overflow-hidden">
    <iframe class="absolute top-0 left-0 w-full h-full" width="800" height="600" frameborder="0" scrolling="no"
      marginheight="0" marginwidth="0"
      :src="`https://maps.google.com/maps?q=${latitude},${longitude}&z=14&amp;output=embed`">
    </iframe>
  </div>
</template>