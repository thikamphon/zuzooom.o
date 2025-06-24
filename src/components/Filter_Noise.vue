<template>
    <div class="grid left-0">
    </div>
    <div class="noise left-0">
    </div>
</template>
<style scoped>
.grid {
    width: 100%;
    height: 100%;
    opacity: .6;
    position: absolute;
    z-index: -1100;
    background-image: url(../assets/Tile_grid.png);
    pointer-events: none;
    background-repeat: repeat;
}

.noise {
    width: 100%;
    height: 100%;
    opacity: .6;
    position: absolute;
    z-index: 1100;
    background-image: url(../assets/noise_img.png);
    pointer-events: none;
    background-repeat: repeat;
}
</style>