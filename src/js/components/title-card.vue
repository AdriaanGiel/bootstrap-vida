<template>
    <div class="container-fluid pl-0">
        <div class="title-box mt-5 text-white d-inline-flex background-primary-blue px-5 py-2">
            <span :style="`font-size: ${size}em`" class="font-bold">{{ title }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "title-card",
        props:{
            title:{
                required: true,
            },
            size:{
                default: 2
            }
        }
    }
</script>

<style scoped lang="stylus">
.title-box
    border-top-right-radius 2em
    border-bottom-right-radius 2em
</style>