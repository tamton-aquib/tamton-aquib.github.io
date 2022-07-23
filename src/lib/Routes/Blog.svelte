<script lang="ts">
    import Card from "../Card.svelte";
    let card = {
        title: "First title!",
        description: "This is an example description for first title.",
    };
</script>

<h1>Blog items</h1>
<Card {card} />

<style>
    h1 {
        margin-bottom: 20px;
    }
</style>
