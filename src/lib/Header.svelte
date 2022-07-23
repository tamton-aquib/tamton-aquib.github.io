<script lang="ts">
    import { page } from "./Store.js";
    const setPage = (e) => {
        $page = e.target.innerHTML.toLowerCase();
    };
</script>

<div class="header">
    <h1 class="logo">
        T<span class="span_logo">@</span>J
    </h1>
    <ul class="list">
        <li class="list_items" on:click|preventDefault={setPage}>Home</li>
        <li class="list_items" on:click|preventDefault={setPage}>Blog</li>
        <li class="list_items" on:click|preventDefault={setPage}>Projects</li>
    </ul>
</div>

<style>
    .header {
        background-color: #29343c;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        margin: 15px;
    }
    .logo {
        padding: 10px;
    }
    .span_logo {
        color: #c8555a;
    }
    .list {
        display: flex;
        padding: 10px;
        padding-inline: 10px;
        padding-left: 15px;
    }
    .list_items {
        padding-left: 15px;
        cursor: pointer;
    }
    .list_items:hover {
        text-decoration: underline;
    }
</style>
