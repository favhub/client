<template>
	<div v-show="isVisible" class="v-loader">
		<div class="overlay"></div>
		<div class="element">
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
</template>

<script>
export default {
	name: "v-loader",
	props: {
		isVisible: Boolean
	}
};
</script>

<style lang="scss" scoped>
.v-loader {
	.overlay {
		background-color: rgba(#fff, 0.75);
	}

	// https://codepen.io/I-is-kevin/pen/jqejXj
	.element {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;

		div {
			animation: expand 1s ease-in-out infinite;
			border-radius: 10px;
			display: inline-block;
			transform-origin: center center;
			margin: 0 3px;
			width: 1px;
			height: 25px;

			@keyframes expand {
				0% {
					transform: scale(1);
				}
				25% {
					transform: scale(2);
				}
			}

			&:nth-child(1) {
				background: #27ae60;
			}

			&:nth-child(2) {
				animation-delay: 180ms;
				background: #f1c40f;
			}

			&:nth-child(3) {
				animation-delay: 360ms;
				background: #e67e22;
			}

			&:nth-child(4) {
				animation-delay: 540ms;
				background: #2980b9;
			}
		}
	}
}
</style>
