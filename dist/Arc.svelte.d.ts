import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ArcProps = typeof __propDef.props;
export type ArcEvents = typeof __propDef.events;
export type ArcSlots = typeof __propDef.slots;
export default class Arc extends SvelteComponentTyped<ArcProps, ArcEvents, ArcSlots> {
}
export {};
