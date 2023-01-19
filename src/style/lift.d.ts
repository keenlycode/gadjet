export interface LiftParam {
    level?: number;
    shadowColor?: string;
}

export declare function lift(param: LiftParam): string;