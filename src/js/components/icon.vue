<template>
    <div class="h-full d-flex justify-center align-items-center">
        <div class="r_logo d-flex justify-content-center align-items-center">
            <img class="img-fluid p-2" :src="src" :style="`width: ${size}em; height: ${size}em`">
        </div>
    </div>
</template>

<script>
    export default {
        name: "icons",
        props:{
            src:{
                require: true
            },
            size:{
                default: "5",
            }
        }
    }
</script>

<style scoped>
    .r_logo{
        border: 10px solid #36a9e1;
        border-radius: 50%;
        width: 6em !important;
        height: 6em !important;
        background-color: white;
    }
</style>