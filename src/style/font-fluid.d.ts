export interface FontFluidParam {
    vwMin?: number,
    vwMax?: number,
    fontSizeMin?: number,
    fontSizeMax?: number
}

export declare function fontFluid(param: FontFluidParam): string;