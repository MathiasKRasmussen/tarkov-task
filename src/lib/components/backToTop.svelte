<script>
	export let buttonVisibleOnPX = 200;
	let hidden = true;

	const goStart = () => {
		document.body.scrollIntoView();
	};

	const scrollElement = () => {
		return document.documentElement || document.body;
	};

	const handleOnScroll = () => {
		if (scrollElement().scrollTop > buttonVisibleOnPX) {
			hidden = false;
		} else {
			hidden = true;
		}
	};
</script>

<svelte:window on:scroll={handleOnScroll} />

<button
	class="back_to_start btn btn-circle btn-info items-center font-bold w-14 h-14"
	on:click={goStart}
	class:hidden
>
	<!--	<img src={`static/svg/arrowUp.svg`} alt={`Update player`} title={`Update player`} /> -->
</button>

<style>
	.back_to_start {
		opacity: 1;
		transition: opacity 1s, visibility 1s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		padding: 5px;
	}

	.back_to_start.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
