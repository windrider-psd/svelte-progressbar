<script lang="ts">
	// @ts-check
	import {getArcPath} from './utils';

	interface Props {
		radius: number;
		startAngle?: number;
		endAngle?: number;
		fill: string;
		stroke: string;
		strokeWidth?: number;
		cls: string;
		closeArc?: boolean;
	}

	let {
		radius,
		startAngle = null,
		endAngle = null,
		fill,
		stroke,
		strokeWidth = 0,
		cls,
		closeArc = false
	}: Props = $props();
</script>

<path d="{getArcPath(50, 50, radius, startAngle, endAngle, closeArc)}" {fill} {stroke} stroke-width={strokeWidth} class="{cls}"/>