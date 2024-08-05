<template>
    <Header></Header>
    
    <main>
        <router-view />
    </main>
    
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/views/components/Header.vue';
import Footer from '@/views/components/Footer.vue';
</script>