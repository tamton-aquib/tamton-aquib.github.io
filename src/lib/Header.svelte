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
        box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
            0px 9px 46px 8px rgba(0, 0, 0, 0.12),
            0px 11px 15px -7px rgba(0, 0, 0, 0.2);
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
