<template>
    <div id="concepting" class="background-secondary-blue">
        <title-card title="Concepting" />
        <div class="container-fluid section">
            <div class="container h-100 py-5 d-flex justify-content-center align-items-center">
                <div class="row">
                    <div class="col-md-12">
                        <p class="mb-3">
                            Na het onderzoek zijn wij begonnen met een brainstormsessie
                            om te beslissen welke richting wij op willen gaan wat betreft de
                            robot en de app. Hierin hielden wij de criteria van de
                            opdrachtgever en de opmerkingen vanuit de doelgroep. We
                            hebben ook vanuit de robot gekeken wat die nodig heeft om
                            goed te kunnen functioneren in een samenwerking.
                        </p>

                        <p>
                            We hebben de inzichten als uitgangspunt genomen voor de
                            concepten. We hebben hieruit gehaald dat voor de doelgroep
                            het niet belangrijk is dat de oplossing leuk is, maar dat het een
                            functionerende rol speelt in de samenwerking. Het gaat erom
                            dat de oplossing een ondersteuning is van de samenwerking.
                            De oplossing mag niet alle aandacht trekken van het
                            uiteindelijke doel in de samenwerking. De doelgroep voelt zich
                            goed wanneer ze er hun doel mee kunnen bereiken en dat is
                            een bijdrage leveren in de samenwerking.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid pl-0 section-lg background-primary-blue position-relative">
            <div class="w-10/12 mx-auto h-100 d-flex justify-content-center align-items-center">
                <div  style="z-index: 5" class="row">
                    <div class="col-md-4 d-flex align-items-end">
                        <div class="card bg-white rounded-xl">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <div class="d-flex flex-row">
                                    <img :src="'./img/logo_emotie_v2_Tekengebied 1.png'" class="img-fluid" alt="">
                                    <img :src="'./img/logo_interactie_v2_Tekengebied 1.png'" class="img-fluid" alt="">
                                </div>
                                <h3>Interactie</h3>
                                <p>
                                    De robot werkt goed, maar nog niet
                                    optimaal. Door de functies die niet
                                    werken aan te passen, kan de robot
                                    optimaal de gebruiker helpen en zorgt
                                    dit ervoor dat er geen onderbrekingen
                                    in de samenwerkingen plaatsvinden.
                                    De robot is een ondersteuning.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 d-flex flex-column">
                        <div class="row align-self-center">
                            <div class="col-md-4">
                                <div class="card bg-white rounded-xl">
                                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img :src="'./img/logo_personalisatie_v2_Tekengebied 1.png'" class="img-fluid" alt="">
                                        <h3>Interactie</h3>
                                        <p>
                                            De robot werkt goed, maar nog niet
                                            optimaal. Door de functies die niet
                                            werken aan te passen, kan de robot
                                            optimaal de gebruiker helpen en zorgt
                                            dit ervoor dat er geen onderbrekingen
                                            in de samenwerkingen plaatsvinden.
                                            De robot is een ondersteuning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card bg-white rounded-xl">
                                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img :src="'./img/logo_emotie_v2_Tekengebied 1.png'" class="img-fluid" alt="">
                                        <h3>Interactie</h3>
                                        <p>
                                            De robot werkt goed, maar nog niet
                                            optimaal. Door de functies die niet
                                            werken aan te passen, kan de robot
                                            optimaal de gebruiker helpen en zorgt
                                            dit ervoor dat er geen onderbrekingen
                                            in de samenwerkingen plaatsvinden.
                                            De robot is een ondersteuning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card bg-white rounded-xl">
                                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img :src="'./img/logo_interactie_v2_Tekengebied 1.png'" class="img-fluid" alt="">
                                        <h3>Interactie</h3>
                                        <p>
                                            De robot werkt goed, maar nog niet
                                            optimaal. Door de functies die niet
                                            werken aan te passen, kan de robot
                                            optimaal de gebruiker helpen en zorgt
                                            dit ervoor dat er geen onderbrekingen
                                            in de samenwerkingen plaatsvinden.
                                            De robot is een ondersteuning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-auto">
                            <div class="bottom-text h-100 w-100 d-flex justify-content-center align-items-center">
                                <p>
                                    Wij hebben uiteindelijk gekozen voor het een concept dat zich zowel focust op de interactie als op de non
                                    verbale communicatie. Vanuit de opdrachtgever was er een sterke neiging naar het concept ‘Emotie’.
                                    Vanuit de doegroep dat emee zou gaan samenwerken kwam al gauw naar voren dat in de communicatie
                                    het voor belangrijk is dat het praktisch is. Er mogen geen onderbrekingen in de samenwerking ontstaan.
                                    De doelgroep wilt dat de robot optimaal werkt, maar vinden emotie ook een deel van de samenwerking
                                    en van het menselijk gedrag. Hierom is het belangrijk dat we hier ook rekening mee houden.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div class="container-fluid position-absolute bg-white bottom-white" style="bottom:0"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "concept-section"
    }
</script>

<style scoped lang="stylus">
.rounded-xl
    border-radius 1.3rem !important
.bottom-white
    z-index 1
    height 8em

.bottom-text
    max-height 15em;
    height 15em;

</style>