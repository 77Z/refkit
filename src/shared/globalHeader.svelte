<script>
	import Button from "./components/Button.svelte";
</script>


<div class="header">
	<div class="rightside">
		<Button action={() => document.location.href = "signin" } class="button">
			Sign in
		</Button>
	</div>
</div>

<style>
	.header {
		background: #353535;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 2rem;
	}

	.rightside {
		display: inline-block;
		position: absolute;
		right: 10px;
	}
</style>
