<template>
    <section class="w-full h-lvh m-auto border-1 flex items-center justify-center">
        <div
            class="p-4 rounded-[2.5rem] bg-[var(--color-tone-obj)] lg:m-[-10px] w-3/4 h-3/4 grid grid-cols-1 gap-2 lg:grid-cols-2 2xl:grid-cols-3 2xl:h-fit overflow-x-hidden overflow-y-auto pointer-events-auto">
            <div class="text-white col-span-2 h-fit">
                <div class="hidden md:flex m-0 xl:mb-[10px]">
                    <img src="../assets/Card-info.svg" alt="">
                </div>
                <div class="md:hidden">
                    <img class="pic" src="../assets/Profile.svg" alt="">
                    <img class="" src="../assets/Details_of_card.svg" alt="">
                </div>
            </div>

            <div class="relative bg-[#f1f1f1] rounded-[30px] text-white col-span-2 lg:col-span-1 h-full w-full p-2">
                <div class="image_text">
                    <img class="w-2/3 m-auto rotate-5" src="../assets/Education_text.svg" alt="">
                </div>
                <ul>
                    <li class="grid grid-rows-[fit-content(100px)_fit-content(100px)]">
                        <div class="col-start-1 fill-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill=" fill-blue-700"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <hr class="w-1 m-auto h-[86%] bg-blue-700" />
                        </div>
                        <div class="col-start-2 w-full text-start timeline-box rounded-[25px] text-[var(--color)] ">
                            <div>
                                <img class="w-35 lg:w-40 rotate-3 absolute right-3 top-15" src="../assets/kmutt.svg"
                                    alt="">
                                <div
                                    class="font-mono italic border-1 rounded-2xl w-fit px-4 py-0.5 border-blue-700 bg-white rotate-[2.5deg] mb-1 text-blue-700">
                                    2019 - 2022
                                </div>
                                <b class="text-xs block">King Mongkut's University of Technology Thonburi
                                </b>
                                <span class="block text-primary-content underline-offset-1 underline">
                                    Bachelor of science, major in Game Development
                                </span>

                                <div class="text-xs">
                                    In college, I studied game development with Unity and was interested in web
                                    development
                                    as a secondary subject. I focused on the mini-game on the computer and web design.
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="text-white bg-[#f1f1f1] rounded-[30px] col-span-2 lg:col-span-1">
                <div class="relative m-auto h-50 md:h-70 lg:h-full w-[90%] grid content-between">
                    <img class="w-2/3 right-item" src="../assets/Skill_text.svg" alt="">
                    <img class="w-2/3 left-item" src="../assets/border_skill_text.svg" alt="">
                    <div class="w-[100%] h-[80%] middle-Y">
                        <img class="w-2/5 absolute left-5 top-5 shadow-base-300" src="../assets/artdesign_sticker.svg"
                            alt="">
                        <img class="w-1/3 absolute right-5 top-10 rotate-12" src="../assets/unity_sticker.svg" alt="">
                        <img class="w-1/3 bottom-0 middle-X" src="../assets/webdev_stcker.svg" alt="">
                    </div>
                </div>

            </div>

            <div class="text-white bg-[#f1f1f1] rounded-[30px] col-span-1 h-full w-full p-4
                md:col-span-2 2xl:col-start-3 2xl:col-end-4 2xl:row-start-1 2xl:row-end-3">
                <div class="w-full h-fit">
                    <img class="w-2/3 md:w-[300px] m-auto" src="../assets/Experience_text.svg" alt="">
                </div>
                <div class="text-[var(--color)] not-last:w-full timeline-box rounded-[20px] mt-2 pb-10 grid gap-4">
                    <div class="hidden w-full grid grid-cols-[10px_1fr] animate_smoothBounce">
                        <div class="status status-info bg-blue-700 mt-2"></div>
                        <div class="w-full h-fit grid grid-rows-2 ">
                            <div class="border-1 border-blue-700 w-fit px-4 py-0.5 rounded-2xl bg-white text-blue-700">
                                Years » 2025
                            </div>
                            <b>Personal Projects & Creative Work</b>
                            <i class="text-[10px]">Created and published digital products like Notion templates and art
                                designs on Redbubble.
                                Combine creativity and technical skills to build personal products for global audiences.
                            </i>
                        </div>
                    </div>
                    <div class="w-full grid grid-cols-[10px_1fr] animate_smoothBounce">
                        <div class="status status-info bg-blue-700 mt-2"></div>
                        <div class="w-full h-fit grid grid-rows-2">
                            <div class="border-1 border-blue-700 w-fit px-4 py-0.5 rounded-2xl bg-white text-blue-700">
                                Years » 2024
                            </div>
                            <b>T.Thapthawi Auto Parts</b>
                            <i class="text-[10px]">Effectively organized and maintained work data via Google Sheets,
                                followed by
                                transforming the data into comprehensive performance analytics.</i>
                        </div>
                    </div>
                    <div class="w-full grid grid-cols-[10px_1fr] animate_smoothBounce">
                        <div class="status status-info bg-blue-700 mt-2"></div>
                        <div class="w-full h-fit grid grid-rows-2">
                            <div class="border-1 border-blue-700 w-fit px-4 py-0.5 rounded-2xl bg-white text-blue-700">
                                Years » 2022
                            </div>
                            <b>Innova interactive intern</b>
                            <i class="text-[10px]">3D Artist with internship experience in creating and designing 3D
                                assets
                                and materials
                                for various projects. Passionate about visual detail and creative problem-solving.</i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
img {
    display: flex;
    margin: auto;
    padding: 0;
}

.middle-X {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(20deg);
}

.middle-Y {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.right-item {
    margin-right: 0;
}

.left-item {
    margin-left: 0;
}

.image_text {
    width: 90%;
    padding: 10px;
}

.pic {
    margin-top: 10px;
    margin-right: -40px;
    rotate: 10deg;
    box-shadow: black 2px;
}

</style>
