import { Props, State } from '../types';
export declare const getIsStageContentPartial: (stageWidth?: number, contentWidth?: number) => boolean;
export declare const getStageContentWidth: (state: Partial<State>) => number;
export declare const getItemsInSlide: (itemsCount: number, props: Props) => number;
export declare const calculateInitialState: (props: Partial<Props>, el: any) => State;
