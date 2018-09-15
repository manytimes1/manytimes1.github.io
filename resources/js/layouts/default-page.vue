<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container-fluid p-0">
            <about-me></about-me>
            <experience></experience>
            <education></education>
        </div>
    </div>
</template>

<script>
    import NavBar from './navbar'
    import AboutMe from './about'
    import Experience from './experience'
    import Education from './education'

    export default {
        components: {
            NavBar, AboutMe, Experience, Education
        }
    }
</script>
