<button on:click={action}>
    <slot />
</button>

<script>
    export let action = () => alert("default");
</script>

<style>
    button {
        padding: 5px 20px;
        background: #ff4500;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>