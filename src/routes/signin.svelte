<script>
	import Button from '../shared/components/Button.svelte';
	import TextInput from '../shared/components/TextInput.svelte';
	import MiddleContent from '../shared/views/middleContent.svelte';
</script>

<MiddleContent>
	<a href="/" class="back">&lt;</a>
	<h1>REFkit Login</h1>
	<hr />
	<TextInput placeholder="Username..." />
	<div class="sep" />
	<TextInput password={true} placeholder="Password..." />
	<div class="sep" />
	<Button>Login</Button>
</MiddleContent>

<style>
	.back {
		position: absolute;
		cursor: pointer;
		top: 10px;
		left: 10px;
		font-weight: 900;
		text-decoration: none;
		color: #fff;
	}

	h1 {
		text-align: center;
	}

	hr {
		border: none;
		border-bottom: 2px solid #fff;
		width: 70%;
	}

	.sep {
		height: 10px;
	}
</style>
