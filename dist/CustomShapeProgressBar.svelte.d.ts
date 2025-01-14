import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CustomShapeProgressBarProps = typeof __propDef.props;
export type CustomShapeProgressBarEvents = typeof __propDef.events;
export type CustomShapeProgressBarSlots = typeof __propDef.slots;
export default class CustomShapeProgressBar extends SvelteComponentTyped<CustomShapeProgressBarProps, CustomShapeProgressBarEvents, CustomShapeProgressBarSlots> {
}
export {};
