<template>
    <footer class="absolute z-1000 bottom-0 left-0 w-full flex items-end justify-between p-4 lg:px-13 xl:xp-34">
        <div class="flex gap-4 flex-col lg:flex-row">
            <div class="tooltip bg-[var(--btn-bg)] rounded-full" data-tip="github">
                <a class="btn btn-link rounded-full w-10 h-10 p-2" href="https://github.com/thikamphon/thikamphon">
                    <img src="../assets/logo-github.svg" alt="github_link">
                </a>
            </div>
            <div class="tooltip bg-[var(--btn-bg)] rounded-full" data-tip="linktree">
                <a class="btn btn-link rounded-full w-10 h-10 p-2" href="https://linktr.ee/zuzooom">
                    <img src="../assets/logo-linktree.svg" alt="linktree_link">
                </a>
            </div>
            <div class="tooltip bg-[var(--btn-bg)] rounded-full" data-tip="mail">
                <a class="btn btn-link rounded-full w-10 h-10 p-2" href="mailto:thikamphon.pang@gmail.com">
                    <img src="../assets/logo-mail.svg" alt="mail">
                </a>
            </div>
            <div class="tooltip bg-[var(--btn-bg)] rounded-full" data-tip="youtube">
                <a class="btn btn-link rounded-full w-10 h-10 p-2" href="https://www.youtube.com/@zuzooom">
                    <img src="../assets/logo-youtube.svg" alt="youtube">
                </a>
            </div>
        </div>
        <svg class="fill-black opacity-40" width="70" height="70" viewBox="0 0 99 99"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.364 2.63604C11.8492 -0.87868 6.15076 -0.87868 2.63604 2.63604C-0.87868 6.15076 -0.87868 11.8492 2.63604 15.364L15.364 2.63604ZM90 99C94.9706 99 99 94.9706 99 90V9.00001C99 4.02944 94.9706 7.62939e-06 90 7.62939e-06C85.0294 7.62939e-06 81 4.02944 81 9.00001V81H9.00001C4.02944 81 7.62939e-06 85.0294 7.62939e-06 90C7.62939e-06 94.9706 4.02944 99 9.00001 99H90ZM9 9L2.63604 15.364L83.636 96.364L90 90L96.364 83.636L15.364 2.63604L9 9Z" />
        </svg>
    </footer>
</template>