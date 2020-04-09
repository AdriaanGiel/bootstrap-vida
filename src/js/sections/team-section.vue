<template>
    <div id="team" class="pl-0 container-fluid bg-white">
        <title-card title="Team VIDA" />
        <div class="container px-0 h-100 d-flex justify-content-center align-items-end py-5">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <team-member img="./img/dion.png" name="Dion Pisas" course="CMGT" rol="Programmeur" />
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <team-member img="./img/adriaan.png" name="Dion Pisas" course="CMGT" rol="Programmeur" />
                </div>


                <div class="col-lg-3 col-md-6 col-sm-6">
                    <team-member img="./img/iris.png" name="Dion Pisas" course="CMGT" rol="Programmeur" />
                </div>


                <div class="col-lg-3 col-md-6 col-sm-6">
                    <team-member img="./img/vanna.png" name="Dion Pisas" course="CMGT" rol="Programmeur" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import TeamMember from "../components/team-member"
    export default {
        name: "team-section",
        components:{
            TeamMember
        }
    }
</script>

<style scoped lang="stylus">
#team
    min-height 40em
    /*height 40em*/
</style>