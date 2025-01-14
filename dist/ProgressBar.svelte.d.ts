import { SvelteComponentTyped } from "svelte";
import type { Threshold } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        series?: any[] | undefined;
        style?: string | undefined;
        thickness?: number | undefined;
        stackSeries?: boolean | undefined;
        margin?: number | undefined;
        valueLabel?: string | undefined;
        width?: number | string | undefined;
        colors?: Array<string> | undefined;
        thresholds?: Array<Threshold> | undefined;
        updatePerc?: ((perc: number, seriesIdx?: number) => void) | undefined;
        updateSeries?: ((_series: []) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ProgressBarProps = typeof __propDef.props;
export type ProgressBarEvents = typeof __propDef.events;
export type ProgressBarSlots = typeof __propDef.slots;
export default class ProgressBar extends SvelteComponentTyped<ProgressBarProps, ProgressBarEvents, ProgressBarSlots> {
    get updatePerc(): (perc: number, seriesIdx?: number) => void;
    get updateSeries(): (_series: []) => void;
    get series(): any[] | undefined;
    /**accessor*/
    set series(_: any[] | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get thickness(): number | undefined;
    /**accessor*/
    set thickness(_: number | undefined);
    get stackSeries(): boolean | undefined;
    /**accessor*/
    set stackSeries(_: boolean | undefined);
    get margin(): number | undefined;
    /**accessor*/
    set margin(_: number | undefined);
    get valueLabel(): string | undefined;
    /**accessor*/
    set valueLabel(_: string | undefined);
    get width(): string | number | undefined;
    /**accessor*/
    set width(_: string | number | undefined);
    get colors(): string[] | undefined;
    /**accessor*/
    set colors(_: string[] | undefined);
    get thresholds(): Threshold[] | undefined;
    /**accessor*/
    set thresholds(_: Threshold[] | undefined);
    get undefined(): any;
    /**accessor*/
    set undefined(_: any);
    get undefined(): any;
    /**accessor*/
    set undefined(_: any);
}
export {};
