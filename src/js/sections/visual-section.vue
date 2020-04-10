<template>
    <div id="visualisatie" class="container-fluid pl-0 section background-secondary-blue position-relative">
        <title-card title="Visualisatie" />
        <div class="w-9/12 mx-auto py-5 ">
            <div class="row">
                <div class="col-md-12 col-lg-6 pl-lg-0 top-content text-xl">
                    <p class="mb-4">
                        We zijn als eerste begonnen met het schetsen van het
                        protoype in een scenario. Hoe het in het begin in zijn werk zal
                        gaan voor de afwezige student.
                    </p>

                    <p class="mb-4">
                        De app is een belangrijk aspect van het concept. Hier is dus
                        gekeken naar hoe de gebruiker een band kan krijgen met de
                        app. Dit wordt gedaan door middel van een personalisatie.
                        Ook is het van belang dat de gebruiker onbewust wordt
                        meegenomen wordt in een stappenplan, zodat de gebruiker
                        makkelijk gebruik kan maken van de robot zonder te veel
                        gedoe.
                    </p>

                    <p class="mb-4">
                        De geschetste robots hebben te maken met de waarden en
                        belangen van de opdrachtgever, de doelgroep en de
                        stakeholders. Deze vormen hebben we daarna bij de
                        doelgroep getest die in een projectgroep samen gaan werken
                        met de robot.
                    </p>

                    <p>
                        Hieruit is een vorm en functie gekozen met feedback op deze
                        schetsen. Deze schetsen zijn uitgewerkt in een illustratie en
                        3D model voor de robot.
                    </p>

                </div>

                <div class="col-md-12 col-lg-6 d-flex pt-5 justify-content-center align-items-start top-content position-relative">
                    <img class="app-concept large shadow-lg d-none d-lg-block position-absolute" :src="`./img/concept_nvcp_Tekengebied 1.png`" alt="App concept">
                    <img class="app-concept mobile-large shadow-lg d-block d-lg-none" :src="`./img/concept_nvcp_Tekengebied 1.png`" alt="App concept">
                </div>
            </div>
        </div>
        <div class="container-fluid background-primary-blue bottom-blue d-none d-lg-block"></div>
        <div class="container-fluid background-primary-blue bottom-blue mobile position-absolute d-block d-lg-none" style="bottom:0"></div>
    </div>
</template>

<script>
    export default {
        name: "visual-section"
    }
</script>

<style scoped lang="stylus">
.app-concept
    top -6.5em
    width 28.5rem
    height auto
    &.large
        right 0
@media (orientation: landscape)
    .mobile-large
        width 80%

@media (min-width: 320px) and (max-width: 767px)
    .app-concept
        width 100%

@media (max-width: 1400px)
    .large
        width 95%

</style>