<template>
    <div id="prototype" class="container-fluid pl-0 section position-relative">
        <title-card title="Prototype" />
        <div class="w-10/12 mx-auto">
            <div class="row h-full">
                <div class="col-xl-4 col-12 col-md-6 top-content">
                    <div class="card bg-white border-0 shadow-xl">
                        <div class="card-body px-5 d-flex flex-column justify-content-center align-items-center">
                            <span class="font-bold text-xl">Rosie</span>
                            <div class="Prototype mb-3">
                                <prototype></prototype>
                            </div>
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
                <div class="col-xl-4 col-12 col-md-6 top-content d-flex align-items-end" >
                    <div class="card bg-white border-0 shadow-xl my-xl-0 my-4">
                        <div class="card-body pt-1 pb-5 d-flex flex-column justify-content-center align-items-center">
                            <img width="90%" height="auto" class="app-screen d-none d-xl-flex" :src="`./img/app-screen.jpeg`" alt="app screen">
                            <img width="80%" height="auto" class="app-screen d-block d-xl-none" :src="`./img/app-screen.jpeg`" alt="app screen">

                            <p class=" my-2 d-block d-xl-none">De app zorgt voor een stappenplan en maakt het zo simpel mogelijk om te navigeren tussen de verschillende opties. Voor de gebruiker is er ook informatie over de robot die wordt gebruikt om hem/haar te representeren. Transparantie is een kernwoord in de app, zodat de gebruiker weet wat er met de informatie gebeurt die de app nodig heeft om optimaal te kunnen werken. De app wordt een deel van de gebruiker, daarin is delen hoe het werkt ook een belangrijk aspect.</p>
                            <span class="background-secondary-blue py-2 px-3 w-100 text-center rounded">
                                <a href="#" class="text-xl font-bold">Check de app</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 top-content flex-column justify-content-center align-items-center d-none d-xl-flex">
                    <p class="text-xl">De app zorgt voor een stappenplan en maakt het zo simpel mogelijk om te navigeren tussen de verschillende opties. Voor de gebruiker is er ook informatie over de robot die wordt gebruikt om hem/haar te representeren. Transparantie is een kernwoord in de app, zodat de gebruiker weet wat er met de informatie gebeurt die de app nodig heeft om optimaal te kunnen werken. De app wordt een deel van de gebruiker, daarin is delen hoe het werkt ook een belangrijk aspect.</p>
                    <span class="background-secondary-blue py-2 px-3 w-100 text-center rounded">
                        <a href="#" class="text-xl font-bold">Check de app</a>
                    </span>
                </div>
            </div>

        </div>
        <div class="container-fluid background-primary-blue bottom-blue position-absolute"></div>
    </div>
</template>

<script>
    import Prototype from "../components/prototype";
    export default {
        name: "prototype-section",
        components:{
            "prototype": Prototype
        }
    }
</script>

<style scoped lang="stylus">
.app-screen
    border-radius 5em

/*.prototype*/
/*    width 10em*/
/*    height 10 em*/
</style>