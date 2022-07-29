<script lang="ts">
    export let card;
    const setBlogItem = () => {
        console.log("set blogitem to this?");
    };
</script>

<section class="card" on:click={setBlogItem}>
    <h3 class="card-title">{card.title}</h3>
    <p class="card-desc">{card.description}</p>
</section>

<style>
    .card {
        background-color: #29343c;
        width: 70%;
        margin: 0 auto;

        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 25px;
        box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
            0px 9px 46px 8px rgba(0, 0, 0, 0.12),
            0px 11px 15px -7px rgba(0, 0, 0, 0.2);
    }

    .card-title,
    .card-desc {
        padding: 20px;
    }
</style>
