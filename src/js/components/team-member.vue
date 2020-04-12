<template>
    <div class="member d-flex flex-column justify-content-center align-items-center font-bold">
        <img class="member-img img-fluid mb-4" :src="img" alt="TeamMember">
        <span class="mb-3">{{ name }}</span>
        <span class="mb-3">{{ course }}</span>
        <div class="mb-3 d-flex flex-column text-center">
            <span v-for="(str,key) in rol.split('|')">
                {{ str }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "team-member",
        props:['name','course','rol','img']
    }
</script>

<style scoped lang="stylus">
.member-img
    height 15em
    width 15em
    border-radius 50%
</style>