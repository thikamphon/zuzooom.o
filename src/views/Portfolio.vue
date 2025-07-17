<script setup>
import { useDataStore } from '../stores/Data'
const dataStore = useDataStore()

</script>
<template>
    <div
        class="bg-[var(--color-tone-obj)] content grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-3/4 h-3/4 overflow-x-hidden overflow-y-auto pointer-events-auto">
        <div v-for="(item, index) in dataStore.projects">
            <div class="rounded-lg card-hover  cursor-pointer card 
            h-fit w-fit max-w-90 shadow-md shadow-gray-600" :key="index">
                <a class="rounded-lg bg-white" :href="item.link" target="_blank">
                    <figure class="h-48 md:h-30 lg:h-47 w-full">
                        <img :src="item.imageUrl" :alt="`overview of project: ` + item.title"
                            class="w-full h-full object-cover object-top" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-black">
                            {{ item.title }}
                        </h2>
                        <p class="line-clamp-2 text-black">{{ item.about }}</p>
                        <div class="card-actions font-light line-clamp-1">
                            <div v-for="(tag, index) in item.tags" :key="index" class="mx-1 badge badge-warning">
                                {{ tag }}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="absolute bottom-0 w-full h-1/6
        z-10 flex justify-center bg-linear-to-t from-black/50 to-black/0 py-8">
    </div>
</template>
<style scoped>
.card-hover {
    @apply hover:scale-95 hover:duration-300
}
</style>
