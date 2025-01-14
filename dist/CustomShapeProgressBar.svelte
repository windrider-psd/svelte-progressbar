<script lang="ts">
	import { run } from 'svelte/legacy';


	// @ts-check

	import type {SeriesStore} from './types';
	import ProgressLabel from './ProgressLabel.svelte';


	let canvasPercWidth = $state(0);
	let canvasPercHeight = $state(0);
	let canvasPercX = $state(0);
	let canvasPercY = $state(0);

	let gradientStartPercX: number = $state(0);
	let gradientEndPercX: number = $state(0);
	let gradientStartPercY: number = $state(0);
	let gradientEndPercY: number = $state(0);

	let maskWidth = $state(0);
	let maskHeight = $state(0);
	let maskX = $state(0);
	let maskY = $state(0);

	const ts = new Date().getTime();

	const maskId = 'tx_mask_' + ts + Math.floor(Math.random() * 999);
	const grId = 'pb_gradient_' + ts + Math.floor(Math.random() * 999);

	if(fillDirection == null)
		fillDirection = 'l2r';

	interface Props {
		height?: number;
		textSize?: number;
		showProgressValue?: boolean;
		addBackground?: boolean;
		bgColor?: string;
		labelColor?: string;
		invLabelColor?: string;
		store: SeriesStore;
		cls?: string;
		path?: string;
		pathFn?: any;
		fillDirection?: string;
		labelAlignX?: string;
		labelAlignY?: string;
		showInvertedLabel?: boolean;
		style: string;
		actWidth?: number;
	}

	let {
		height = null,
		textSize = null,
		showProgressValue = true,
		addBackground = true,
		bgColor = '#f1f1f1',
		labelColor = null,
		invLabelColor = null,
		store,
		cls = '',
		path = $bindable(null),
		pathFn = () => '',
		fillDirection = $bindable('l2r'),
		labelAlignX = 'center',
		labelAlignY = 'middle',
		showInvertedLabel = labelAlignX == 'center' && labelAlignY == 'middle',
		style,
		actWidth = 0
	}: Props = $props();
	let vbHeight: number = $state(0);
	let scaleX: number = $state(1);
	let scaleY: number = $state(1);

	run(() => {
		if(actWidth > 0) {
			vbHeight = height * 100 / actWidth;
			scaleX = 100 / actWidth;
			scaleY = vbHeight / height;
		}
	});

	run(() => {
		if(pathFn)
			path = pathFn(100, vbHeight);
	});

	run(() => {
		if( (fillDirection == 'l2r') || (fillDirection == 'r2l') ) {

			canvasPercWidth = $store.overallPerc;
			canvasPercHeight = height;

			gradientEndPercX = $store.overallPerc;

			maskWidth = 100 - $store.overallPerc;
			maskHeight = 100;

			maskX = $store.overallPerc;

			if(fillDirection == 'r2l') {
				// canvasPercX = canvasWidth - canvasPercWidth;
				canvasPercX = 100 - canvasPercWidth;
				maskX = 0;
				gradientStartPercX = 100;
				gradientEndPercX = 100 - $store.overallPerc;
			}

		}
		else if( (fillDirection == 't2b') || (fillDirection == 'b2t')) {

			maskWidth = 100;
			maskHeight = 100 - $store.overallPerc;
			maskY = $store.overallPerc;

			canvasPercWidth = 100;
			canvasPercHeight = $store.overallPerc * height / 100;

			gradientStartPercY = 0;
			gradientEndPercY = $store.overallPerc;

			if(fillDirection == 'b2t') {
				canvasPercY = height - canvasPercHeight;
				maskY = 0;
				gradientStartPercY = 100;
				gradientEndPercY = 100 - $store.overallPerc;
			}

		}

	});
</script>

<style>
	.progressbar {
		overflow: visible;
	}
</style>

<svg class="progressbar progressbar-{style} {cls}" viewBox="0 0 100 {vbHeight}" width="100%" height="{height}" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="{grId}" x1="{gradientStartPercX}%" x2="{gradientEndPercX}%" y1="{gradientStartPercY}%" y2="{gradientEndPercY}%">
			{#each $store.series as serie, seriesIdx}
				{#if serie.perc > 0}
					<stop offset="{Math.round( $store.series[seriesIdx].prevOffset)}%" stop-color="{$store.series[seriesIdx].color}" />
					<stop offset="{Math.round( $store.series[seriesIdx].prevOffset + $store.series[seriesIdx].perc)}%" stop-color="{$store.series[seriesIdx].color}" />
				{/if}
			{/each}
		</linearGradient>
		{#if showProgressValue}
			<mask id="{maskId}" x="0" y="0" width="100%" height="{height}">
				<rect width="{maskWidth}%" height="{maskHeight}%" x="{maskX}%" y="{maskY}%" fill="#fff" />
			</mask>
		{/if}
	</defs>

	{#if addBackground}
		<path d={path} x="0" y="0" fill={bgColor} class="progress-bg"></path>
	{/if}
	<svg width="{canvasPercWidth}%" height="{canvasPercHeight}" x="{canvasPercX}" y="{canvasPercY}" viewBox="{canvasPercX} {canvasPercY} {canvasPercWidth} {canvasPercHeight}">
		<path d={path} x="0" y="0" fill="url(#{grId})"></path>
	</svg>
	{#if showProgressValue}
		<ProgressLabel
			{store}
			{textSize}
			{labelColor}
			{invLabelColor}
			{labelAlignX}
			{labelAlignY}
			{showInvertedLabel}
			{maskId}
			{style}
			{scaleX}
			{scaleY}>
		</ProgressLabel>
	{/if}
</svg>