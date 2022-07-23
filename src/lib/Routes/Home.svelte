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
        }, 250);
    });
</script>

<h1>{current}</h1>
