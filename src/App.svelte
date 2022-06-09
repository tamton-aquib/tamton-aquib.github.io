<script>
    import Header from "./lib/Header.svelte";
    import MidContainer from "./lib/MidContainer.svelte";
    import Socials from "./lib/Socials.svelte";
</script>

<main>
    <Header />
    <MidContainer />
    <Socials />
</main>

<style>
    :root {
        font-family: "Cascadia Code", sans-serif;
        background-color: #1a2026;
        color: #9ce5c0;
        margin: 0;
        padding: 0;
    }
    :global(body) {
        margin: 0;
        padding: 0;
    }

    main {
        min-height: 100vh;
        display: flex;
        position: relative;
        text-align: center;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
