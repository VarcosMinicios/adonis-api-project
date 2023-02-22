<template>
	<article>
		<header class="row items-center q-gutter-sm">
			<q-icon size="lg" name="font_download" />
			<span>
				nome usuario • {{ '1 h' }}
			</span>
			<q-space />
			<q-btn flat dense>
				<q-icon name="more_horiz" size="sm" />
			</q-btn>
		</header>
	</article>

	
</template>

<script setup>
	import { defineProps } from 'vue'

	const props = defineProps({
		post: Object
	});
</script>