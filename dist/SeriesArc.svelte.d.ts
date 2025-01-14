import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SeriesArcProps = typeof __propDef.props;
export type SeriesArcEvents = typeof __propDef.events;
export type SeriesArcSlots = typeof __propDef.slots;
export default class SeriesArc extends SvelteComponentTyped<SeriesArcProps, SeriesArcEvents, SeriesArcSlots> {
}
export {};
