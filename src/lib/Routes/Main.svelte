<script lang="ts">
    import { page } from "../Store.js";
    import Home from "./Home.svelte";
    import Blog from "./Blog.svelte";
    import Projects from "./Projects.svelte";
    import NotFound from "./NotFound.svelte";

    const pages = {
        home: Home,
        blog: Blog,
        projects: Projects,
    };

    const getComponent = function () {
        return pages[$page] || NotFound;
    };
</script>

<div class="container">
    <svelte:component this={getComponent()} />
</div>
