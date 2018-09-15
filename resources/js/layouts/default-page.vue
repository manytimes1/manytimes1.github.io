<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container-fluid p-0">
            <about-me></about-me>
            <experience></experience>
        </div>
    </div>
</template>

<script>
    import NavBar from './navbar'
    import AboutMe from './about'
    import Experience from './experience'

    export default {
        components: {
            NavBar, AboutMe, Experience
        }
    }
</script>
