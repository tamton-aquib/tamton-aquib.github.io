<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Footer from "./lib/Footer.svelte";
    import Main from "./lib/Routes/Main.svelte";
</script>

<main>
    <Header />
    <Main />
    <Footer />
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    :global(*) {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    main {
        text-align: center;
        margin: 0 auto;
        background-color: #1a2026;
        color: #9ce5c0;
        min-height: 100vh;
    }
</style>
