<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container-fluid p-0">
            <about-me></about-me>
            <experience></experience>
            <education></education>
            <skills></skills>
            <certifications></certifications>
            <projects></projects>
        </div>
    </div>
</template>

<script>
    import NavBar from './navbar'
    import AboutMe from './about'
    import Experience from './experience'
    import Education from './education'
    import Skills from './skills'
    import Certifications from './certificates'
    import Projects from './projects'

    export default {
        components: {
            NavBar, AboutMe, Experience,
            Education, Skills, Certifications, Projects
        }
    }
</script>
