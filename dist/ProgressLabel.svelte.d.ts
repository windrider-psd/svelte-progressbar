import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProgressLabelProps = typeof __propDef.props;
export type ProgressLabelEvents = typeof __propDef.events;
export type ProgressLabelSlots = typeof __propDef.slots;
export default class ProgressLabel extends SvelteComponentTyped<ProgressLabelProps, ProgressLabelEvents, ProgressLabelSlots> {
}
export {};
