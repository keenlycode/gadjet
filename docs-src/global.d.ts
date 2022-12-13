import { LanguageFn } from 'highlight.js';
import { Adapter as A } from '@nitipit/adapter/src/adapter.d';

import {
    FontFluidParam,
    LiftParam
} from 'gadjet/src/style.d';
import { Sidebar } from '../src/ui/sidebar/sidebar';

export interface hljs {
    registerLanguage(lang: string, langFn: LanguageFn);
}

declare global {
    interface Window {
        addStyle(ts: TemplateStringsArray, ...strings);
        aspectRatio(ratio: string);
        bgColor(color: string);
        fontFluid(param: FontFluidParam);
        lift(param: LiftParam);
        Adapter: A;
        theme: any;
        hljs: hljs;
        sidebar: Sidebar;
    }
    function addStyle(ts: TemplateStringsArray, ...strings);
    function aspectRatio(ratio: string);
    function bgColor(color: string);
    function fontFluid(param: FontFluidParam);
    function lift(param: LiftParam);
    class Adapter extends A {}
    var hljs: hljs;
    var sidebar: Sidebar;
}