<script>
	import Header from '../shared/globalHeader.svelte';
	import Content from '../shared/views/SquishedContent.svelte';

	export const prerender = true;
	// Tell Svelte to prerender this page
	// No dynamic content allowed
</script>

<Header />

<Content>
	<h3>REFkit. Cybernetically enhanced socialness-ness</h3>
	<h1>Not Logged in :/</h1>
</Content>
