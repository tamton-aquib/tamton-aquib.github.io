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
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    :global(*) {
        padding: 0;
        margin: 0;
        overflow: hidden;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    :global(*::-webkit-scrollbar) {
        display: none;
    }

    main {
        text-align: center;
        position: relative;
        margin: 0 auto;
        background-color: #1a2026;

        color: #9ce5c0;
        width: 100%;
        min-height: 100vh;
        overflow-y: auto;
        /* height: 80vh; 
        overflow-y: scroll;
        overflow: auto; */
    }
</style>
