<script setup lang="ts">
import Header from './components/Header.vue';

useHead({
  title: 'Jumbo Frontend Test'
})
</script>
<template>
  <Header />
  <main class="p-2 md:p-5 pt-20 md:pt-24 min-h-screen w-full bg-slate-100">
    <section class="md:w-10/12 m-auto shadow p-5 bg-white border rounded">
      <NuxtPage />
    </section>
  </main>
</template>