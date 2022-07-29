<script lang="ts">
    import { page } from "../Store.js";
    import Home from "./Home.svelte";
    import Blog from "./Blog.svelte";
    import Contacts from "./Contacts.svelte";
    import NotFound from "./NotFound.svelte";

    const pages = {
        home: Home,
        blog: Blog,
        contacts: Contacts,
    };

    const getComponent = function () {
        return pages[$page] || NotFound;
    };
</script>

<div class="container">
    <svelte:component this={getComponent()} />
</div>

<style>
    .container {
        height: 85vh;
        overflow: auto;
    }
</style>
