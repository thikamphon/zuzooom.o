<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import logoLight from '../assets/LOGO-zuzooom-light.png'
import logoDark from '../assets/LOGO-zuzooom-dark.png'
const isLight = ref(false)
const logoSrc = ref(logoLight)

const toggleTheme = () => {
    const html = document.documentElement
    const currentTheme = html.getAttribute('data-theme')
    html.setAttribute('data-theme', currentTheme === 'dracula' ? 'emerald' : 'dracula')

    isLight.value = !isLight.value
    logoSrc.value = isLight.value ? logoDark : logoLight

}

const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

</script>
<template>
    <div class="absolute z-1000 top-0 left-0 w-full px-4 lg:px-13 xl:xp-34">
        <div class="navbar flex items-start lg:items-center">
            <div class="navbar-start w-40 gap-4">
                <img class="w-6" :src="logoSrc" alt="">
                <div class="font-bold text-[var(--color)] text-lg hidden lg:block">ZUZOOOM</div>
            </div>
            <div class="navbar-end flex justify-between w-full lg:flex-row-reverse lg:navbar-start gap-4">
                <label class="btn btn-circle bg-[#7c7c7c93] swap swap-rotate border-0 shadow-[opacity-0]">
                    <input type="checkbox" class="theme-controller" value="emerald" @click="toggleTheme" />
                    <svg class="sun-icon swap-off h-8 w-8 fill-[var(--color)]" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg class="moon-icon swap-on h-8 w-8 fill-[var(--color)]" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                <div class="flex flex-col items-end lg:flex-row ">
                    <label class="btn btn-circle bg-[#7c7c7c93] border-0 swap swap-rotate lg:hidden">
                        <input type="checkbox" @click="toggleMenu" />
                        <svg class="swap-off fill-[var(--color)]" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                        <svg class="swap-on fill-[var(--color)]" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                    <ul
                        :class="[
                            'menu gap-4 font-semibold',
                            'transition-all duration-300',
                            'lg:flex lg:static lg:translate-y-0 lg:opacity-100 lg:flex-row ',
                            isMenuOpen ? 'absolute top-16 rounded-xl bg-[var(--color-tone-obj)] shadow opacity-100' : 'hidden opacity-0']">
                        <li class=" w-[130px]">
                            <RouterLink :to="{ name: 'home' }" class="btn-navbar block p-2 w-full text-center">HOME
                            </RouterLink>
                        </li>
                        <li class="w-[130px]">
                            <RouterLink :to="{ name: 'portfolio' }" class="btn-navbar block p-2 w-full text-center">
                                PORTFOLIO</RouterLink>
                        </li>
                        <li class="w-[130px]">
                            <RouterLink :to="{ name: 'contact' }" class="btn-navbar block p-2 w-full text-center">
                                CONTACT</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.menu-edit {
    position: absolute;
    /* left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
}
</style>
