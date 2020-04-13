<template>
    <div id="rosie" class="container-fluid background-secondary-blue pl-0">
        <title-card title="Introductievideo" />
        <div class="container pb-5 pt-3 h-100 ">
            <div class="row mb-5">
                <div class="col-md-10 mx-auto text-xl">
                    <p class="mb-5">
                        Na 8 weken is Rosie tot stand gekomen. Er wordt nu verteld hoe Rosie zal bijdragen aan de situatie in de context. Met deze introductievideo introduceren we Rosie in het leven van de afwezige student.
                    </p>
                    <p>Welkom Rosie!</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card w-100 video-card bg-white border-0 shadow-xl">
                        <div class="card-body py-1 d-flex flex-column justify-content-center align-items-center">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QpVYy3BSgYo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "video-section"
    }
</script>

<style scoped lang="stylus">
.video-card
    height 35em
</style>