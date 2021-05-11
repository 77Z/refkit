<script>
	export let raiseOnHover = false;
</script>

<button on:click|self><slot /></button>

{#if raiseOnHover}
	<style>
		button:hover {
			transform: translateY(-5px);
		}
	</style>
{/if}

<style>
	button {
		font-size: 1rem;
		padding: 10px 25px;
		box-sizing: border-box;
		border-radius: 5px;
		cursor: pointer;
		border: none;
		background: #ff4500;
		color: #fff;
	}
</style>
