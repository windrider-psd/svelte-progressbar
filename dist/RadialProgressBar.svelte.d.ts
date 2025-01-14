import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RadialProgressBarProps = typeof __propDef.props;
export type RadialProgressBarEvents = typeof __propDef.events;
export type RadialProgressBarSlots = typeof __propDef.slots;
export default class RadialProgressBar extends SvelteComponentTyped<RadialProgressBarProps, RadialProgressBarEvents, RadialProgressBarSlots> {
}
export {};
