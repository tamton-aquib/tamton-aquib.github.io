<script>
</script>

<nav class="navbar">
    <div class="logo">
        T<span>@</span>J
    </div>

    <ul class="nav-items">
        <li>About</li>
        <li>Blog</li>
        <li>Projects</li>
    </ul>
</nav>

<style>
    nav {
        background-color: #29343d;
        height: 3rem;
        width: 95%;
        border-radius: 8px;
        box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.16);
        position: absolute;
        top: 0;
        margin-top: 15px;
    }
    .logo {
        position: absolute;
        font-size: 3rem;
        line-height: 3rem;
        padding: 0 20px;
    }
    span {
        color: #f7768e;
        font-size: 2.5rem;
    }

    .nav-items {
        float: right;
        margin-right: 2rem;
    }

    li {
        display: inline-block;
        padding-left: 10px;
    }
    li:hover {
        text-decoration: underline;
        text-decoration-thickness: 3px;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        .navbar {
            font-size: 0.8rem;
        }
    }
</style>
