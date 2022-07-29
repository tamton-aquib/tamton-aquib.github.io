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
    <ul>
        <li on:click|preventDefault={setPage}>Home</li>
        <li on:click|preventDefault={setPage}>Blog</li>
        <li on:click|preventDefault={setPage}>Contacts</li>
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
        padding-left: 15px;
        transition: transform 0.5s, color 0.8s;
    }
    .logo:hover {
        transform: scale(1.05);
        color: #ffffff;
        cursor: pointer;
    }
    .span_logo {
        color: #c8555a;
    }
    ul {
        display: flex;
        padding: 10px;
        padding-inline: 10px;
        padding-left: 15px;
        list-style: none;
    }
    li {
        padding-left: 15px;
        cursor: pointer;
    }
    li:hover {
        text-decoration: underline;
    }
</style>
