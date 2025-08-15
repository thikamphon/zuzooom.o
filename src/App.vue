<script setup>
import { RouterView } from 'vue-router'

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Filter_Noise from "./components/Filter_Noise.vue";

</script>

<template>
    <Filter_Noise></Filter_Noise>
    <Navbar />
    <body class="container-full">
        <RouterView></RouterView>
    </body>
    <Footer />

</template>

<style scoped>
.container-full {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    /* overflow: hidden; */
}
</style>
