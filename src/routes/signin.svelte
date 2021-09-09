<script>
	import TextInput from '../shared/components/TextInput.svelte';
	import MiddleContent from '../shared/views/middleContent.svelte';
</script>

<MiddleContent>
	<h1>Login</h1>
	<hr />
	<TextInput placeholder="Username..." />
</MiddleContent>

<style>
	h1 {
		text-align: center;
	}

	hr {
		border: none;
		border-bottom: 2px solid #fff;
		width: 70%;
	}
</style>
