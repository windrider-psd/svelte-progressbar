<script lang="ts">
	import { run } from 'svelte/legacy';

	// @ts-check
	import Arc from './Arc.svelte';
	import SeriesArc from './SeriesArc.svelte';
	import ProgressLabel from './ProgressLabel.svelte';

	import type { SeriesStore, Threshold } from './types';
	import { seriesStore } from './stores';

	interface Props {
		thickness?: number;
		textSize?: number;
		showProgressValue?: boolean;
		stackSeries?: boolean;
		margin?: number;
		addBackground?: boolean;
		bgColor?: string;
		bgFillColor?: string;
		labelColor?: string;
		invLabelColor?: string;
		startAngle?: number;
		endAngle?: number;
		colors: Array<string>;
		thresholds: Array<Threshold>;
		store: SeriesStore;
		style: string;
		cls?: string;
		labelAlignX: string;
		labelAlignY: string;
		actWidth?: number;
		children?: import('svelte').Snippet;
	}

	let {
		thickness = 5,
		textSize = $bindable(null),
		showProgressValue = true,
		stackSeries = true,
		margin = 0,
		addBackground = true,
		bgColor = '#e5e5e5',
		bgFillColor = 'transparent',
		labelColor = '#555',
		invLabelColor = '#fff',
		startAngle = $bindable(0),
		endAngle = $bindable(360),
		colors,
		thresholds,
		store,
		style,
		cls = '',
		labelAlignX,
		labelAlignY = $bindable(),
		actWidth = 0,
		children
	}: Props = $props();

	let vbHeight = $state(100);
	let actHeight: number = $state(0);
	let scaleX: number = $state(1);
	let scaleY: number = $state(1);

	run(() => {
		if(style == 'semicircle') {
			actHeight = actWidth / 2;
			vbHeight = 50;
		}
		else {
			actHeight = actWidth;
			vbHeight = 100;
		}

		if(actWidth > 0)
			scaleX = 100 / actWidth;
		if(actHeight > 0)
			scaleY = vbHeight / actHeight;
	});

	if(style == 'semicircle') {
		if(!labelAlignY)
			labelAlignY = 'bottom';

		startAngle = -90;
		endAngle = 90;
	}
	else {
		if(!labelAlignY)
			labelAlignY = 'middle';
	}

	const ts = new Date().getTime();
	const maskId = 'tx_mask_' + ts + Math.floor(Math.random() * 999);

	if(textSize == null)
		textSize = 100;

	const maskSeries = [{
		perc: $store.overallPerc,
		radius: 50 - (thickness * $store.series.length),
		color: '#fff'
	}];

	const maskStore = seriesStore(maskSeries, {colors, thresholds, stackSeries: false, thickness, margin});

</script>

<svg class="progressbar progressbar-{style} {cls}" viewBox="0 0 100 {vbHeight}" width="100%" height="{actHeight}" xmlns="http://www.w3.org/2000/svg">

	{#if showProgressValue}
		<defs>
			<mask id="{maskId}" x="0" y="0" width="100" height="100%">
				<SeriesArc store={maskStore} serieIdx={0} {thickness} {startAngle} {endAngle} />
				<Arc radius={50 - thickness} fill="#fff" {startAngle} {endAngle} closeArc={true} />
			</mask>
		</defs>
	{/if}

	<!-- If series don't have to be stacked, add only one background arc -->
	{#if addBackground && stackSeries}
		<Arc radius={$store.series[0].radius} fill="{bgFillColor}" {startAngle} {endAngle} strokeWidth={thickness} stroke={bgColor} />
	{/if}

	{#each $store.series as serie, idx}
		<!-- If series have to be stacked, add one background arc with concentric radius for each series  -->
		{#if !stackSeries && addBackground}
			<Arc radius={serie.radius} fill="{bgFillColor}" {startAngle} {endAngle} strokeWidth={thickness} stroke={bgColor} />
		{/if}
		<SeriesArc {store} serieIdx={idx} {thickness} {startAngle} {endAngle} {stackSeries} />
	{/each}

	{#if showProgressValue}
		<ProgressLabel
			{store}
			{textSize}
			{labelColor}
			{invLabelColor}
			{maskId}
			{style}
			{labelAlignX}
			{labelAlignY}
			{scaleX}
			{scaleY}>
		</ProgressLabel>
	{/if}
	{@render children?.()}
</svg>