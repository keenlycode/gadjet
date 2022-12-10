import { LanguageFn } from 'highlight.js';

import {
    FontFluidParam,
    LiftParam } from 'gadjet/src/style';
import { Adapter } from 'gadjet/src/adapter';

export declare interface hljs {
    registerLanguage(lang: string, LanguageFn);
}

declare global {
    interface Window {
        addStyle(s: TemplateStringsArray);
        aspectRatio(ratio: string);
        bgColor(color: string);
        fontFluid(param: FontFluidParam);
        lift(param: LiftParam);
        gadjet: any;
        Adapter: Adapter;
        theme: any;
        hljs: hljs;
    }
}