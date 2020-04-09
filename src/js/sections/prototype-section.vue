<template>
    <div id="prototype" class="container-fluid pl-0 section position-relative">
        <title-card title="Prototype" />
        <div class="w-10/12 mx-auto">
            <div class="row h-full">
                <div class="col-md-4 top-content">
                    <div class="card bg-white border-0 shadow-xl">
                        <div class="card-body px-5 d-flex flex-column justify-content-center align-items-center">
                            <span class="font-bold text-xl">Rosie</span>
                            <div class="Prototype"></div>
                            <p class="mb-4">
                                De schetsen zijn bekeken door de doelgroep. Er is gekozen voor een mix van twee robots:
                            </p>
                            <p class="mb-4">
                                1. De robot gericht op functionali - teit en mobiliteit. De doelgroep vindt het belangrijk dat de robot zelf kan
                                rondrijden en draaien.
                            </p>
                            <p class="mb-4">
                                “ Ik wil niet hoeven zorgen voor de robot, ik verwacht zelfstandigheid.”
                            </p>
                            <p class="mb-4">
                                “ Ik wil niet hoeven zorgen voor de robot, ik verwacht zelfstandigheid.”
                            </p>
                            <p class="mb-4">
                                ” Ik verwacht dat de gebruiker achter de robot overal aan mee kan doen.“
                            </p>
                            <p class="mb-4">
                                2. De robot gericht op non verbale communicatie en menselijke eigenschappen. De doelgroep vindt de menselijke eigenschappen fijn om mee te identificeren. Door de impliciete verwerking van de eigenschappen is het niet aflei - dend.
                                Psychologie student:
                            </p>
                            <p>
                                ” Ik vind het fijn als de robot menselijke eigenschappen heeft.“
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 top-content d-flex align-items-end" >
                    <div class="card bg-white border-0 shadow-xl">
                        <div class="card-body pt-1 pb-5 d-flex flex-column justify-content-center align-items-center">
                            <img width="100%" height="auto" class="app-screen" :src="`./img/app-screen.jpeg`" alt="app screen">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 top-content d-flex justify-content-center align-items-center">
                    <p class="text-xl mb-5">De app zorgt voor een stappenplan en maakt het zo simpel mogelijk om te navigeren tussen de verschillende opties. Voor de gebruiker is er ook informatie over de robot die wordt gebruikt om hem/haar te representeren. Transparantie is een kernwoord in de app, zodat de gebruiker weet wat er met de informatie gebeurt die de app nodig heeft om optimaal te kunnen werken. De app wordt een deel van de gebruiker, daarin is delen hoe het werkt ook een belangrijk aspect.</p>
                </div>
            </div>

        </div>
        <div class="container-fluid background-primary-blue bottom-blue position-absolute"></div>
    </div>
</template>

<script>
    export default {
        name: "prototype-section"
    }
</script>

<style scoped lang="stylus">
.app-screen
    border-radius 5em
</style>