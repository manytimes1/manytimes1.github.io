<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container-fluid p-0">
            <about-me></about-me>
        </div>
    </div>
</template>

<script>
    import NavBar from './navbar'
    import AboutMe from './about'

    export default {
        components: {
            NavBar, AboutMe
        }
    }
</script>
