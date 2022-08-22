<script lang="ts">
    import Card from "../Card.svelte";

    let cards = [
        {
            title: "First title!",
            description: "This is an example description for first title.",
        },
        {
            title: "Second title!",
            description: "This is an example description for second title.",
        },
        {
            title: "Third title!",
            description: "This is an example description for third title.",
        },
        {
            title: "Fourth title!",
            description: "This is an example description for fourth title.",
        },
    ];
</script>

<h1><u>Blog items</u></h1>
<div class="blog_container">
    {#each cards as card}
        <Card {card} />
    {/each}
</div>

<style>
    h1 {
        margin-bottom: 20px;
    }

    .blog_container {
        margin-bottom: 80px;
    }
</style>
