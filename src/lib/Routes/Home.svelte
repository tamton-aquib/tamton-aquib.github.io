<script lang="ts">
    import { onMount } from "svelte";

    const text = "Hello There!";
    let index = 0;
    let current: string = "";

    onMount(() => {
        let intervalId = setInterval(() => {
            if (current.length === text.length) clearInterval(intervalId);

            current += text.charAt(index);
            index++;
        }, 150);
    });
</script>

<h1>{current}</h1>

<style>
    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
