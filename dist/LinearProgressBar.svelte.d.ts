import { SvelteComponentTyped } from "svelte";
import type { SeriesStore } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        style?: string | undefined;
        rx?: number | undefined;
        ry?: number | undefined;
        height?: number | undefined;
        store: SeriesStore;
        labelAlignY?: string | undefined;
        actWidth: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LinearProgressBarProps = typeof __propDef.props;
export type LinearProgressBarEvents = typeof __propDef.events;
export type LinearProgressBarSlots = typeof __propDef.slots;
export default class LinearProgressBar extends SvelteComponentTyped<LinearProgressBarProps, LinearProgressBarEvents, LinearProgressBarSlots> {
}
export {};
