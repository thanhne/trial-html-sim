<template>
    <Header></Header>
    <!--<main>
        <router-view />
    </main>-->
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Section4></Section4>
    <Section5></Section5>
    <Section6></Section6>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/views/components/Header.vue';
import Footer from '@/views/components/Footer.vue';
import Section1 from '@/views/section/Section1.vue';
import Section2 from '@/views/section/Section2.vue';
import Section3 from '@/views/section/Section3.vue';
import Section4 from '@/views/section/Section4.vue';
import Section5 from '@/views/section/Section5.vue';
import Section6 from '@/views/section/Section6.vue';
</script>