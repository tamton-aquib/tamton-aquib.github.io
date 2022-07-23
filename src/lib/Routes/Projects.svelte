<script lang="ts">
    import Card from "../Card.svelte";

    const cards = [
        {
            title: "veldora",
            description: "Bruteforce tool made in rust.",
            link: "https://github.com/tamton-aquib/veldora",
        },
        {
            title: "staline.nvim",
            description: "modern lightweight statusline for nvim.",
            link: "https://github.com/tamton-aquib/staline.nvim",
        },
        {
            title: "graveyard",
            description: "Some of my rust side-projects.",
            link: "https://github.com/tamton-aquib/graveyard",
        },
        {
            title: "duck.nvim",
            description: "A duck that waddles arbitrarily in nvim.",
            link: "https://github.com/tamton-aquib/duck.nvim",
        },
        {
            title: "nice.nvim",
            description: "A nice that waddles arbitrarily in nvim.",
            link: "https://github.com/tamton-aquib/nice.nvim",
        },
    ];
</script>

<h1>Projects!</h1>
{#each cards as card}
    <Card {card} />
{/each}

<style>
    .project-container {
    }
</style>
