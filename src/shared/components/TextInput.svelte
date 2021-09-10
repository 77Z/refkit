<script>
	export let placeholder = 'Text...';
	export let password = false;
</script>

{#if password}
	<input type="password" {placeholder} />
{:else}
	<input type="text" {placeholder} />
{/if}

<style>
	input {
		background: #222;
		color: #fff;
		border: none;
		outline: none;
		caret-color: #ff4500;
		font-size: 17px;
		box-sizing: border-box;
		padding: 5px 10px;
		border-radius: 5px;
	}
</style>
