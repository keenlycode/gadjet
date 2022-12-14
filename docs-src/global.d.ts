import { LanguageFn } from 'highlight.js';
import { Adapter as A } from '@nitipit/adapter/src/adapter.d';

import {
    FontFluidParam,
    LiftParam
} from 'gadjet/src/style.d';
import { Sidebar } from '../src/ui/sidebar/sidebar';
import { ButtonPin } from '../src/ui/button/button-pin';

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
        Color: any;
        baseUrl: URL;
        sidebar: Sidebar;
        sidebarButton: ButtonPin;
    }
    function addStyle(ts: TemplateStringsArray, ...strings);
    function aspectRatio(ratio: string);
    function bgColor(color: string);
    function fontFluid(param: FontFluidParam);
    function lift(param: LiftParam);
    class Adapter extends A {}
    var hljs: hljs;
    var Color: any;
    var baseUrl: URL;
    var sidebar: Sidebar;
    var sidebarButton: ButtonPin;
}