<template>
    <main role="main">
        <intro-section/>
        <visie-section/>
        <team-section/>
        <research-section/>
        <concept-section/>
        <sketch-section/>
        <visual-section/>
        <robot-section/>
        <app-section/>
    </main>
</template>

<script>
    import IntroSection from "./sections/intro-section";
    import VisieSection from "./sections/visie-section";
    import TeamSection from "./sections/team-section";
    import ConceptSection from "./sections/concept-section";
    import ResearchSection from "./sections/research-section";
    import SketchSection from "./sections/sketch-section";
    import VisualSection from "./sections/visual-section";
    import PrototypeSection from "./sections/prototype-section";
    import AppSection from "./sections/app-section";

    export default {
        name: "main-content",
        components:{
            AppSection,
            "intro-section": IntroSection,
            "visie-section": VisieSection,
            "team-section": TeamSection,
            "concept-section": ConceptSection,
            "research-section": ResearchSection,
            "sketch-section": SketchSection,
            "visual-section": VisualSection,
            "robot-section": PrototypeSection,
            "app-section": AppSection,
        }
    }
</script>

<style scoped>

</style>